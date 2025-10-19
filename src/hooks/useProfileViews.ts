import { useState, useEffect } from 'react';

const VIEWS_STORAGE_KEY = 'portfolio_profile_views';
const LAST_UPDATE_KEY = 'portfolio_last_update';
const START_DATE_KEY = 'portfolio_start_date';

/**
 * Custom hook to track and display profile views
 * Starts from 0 and increments for each visitor after 6:00 AM Sri Lanka time
 */
export const useProfileViews = (initialViews: number = 0) => {
  const [views, setViews] = useState<number>(0);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Get current time in Sri Lanka timezone (UTC+5:30)
    const now = new Date();
    const sriLankaOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
    const sriLankaTime = new Date(now.getTime() + sriLankaOffset);
    
    // Check if start date exists, if not, set it to today at 6:00 AM
    let startDate = localStorage.getItem(START_DATE_KEY);
    if (!startDate) {
      // Set start date to today at 6:00 AM
      const today6AM = new Date(sriLankaTime);
      today6AM.setHours(6, 0, 0, 0);
      startDate = today6AM.getTime().toString();
      localStorage.setItem(START_DATE_KEY, startDate);
      localStorage.setItem(VIEWS_STORAGE_KEY, '0');
    }

    // Get stored view count
    const storedViews = localStorage.getItem(VIEWS_STORAGE_KEY);
    let currentViews = 0;
    
    if (storedViews) {
      currentViews = parseInt(storedViews, 10);
    }

    // Get today's 6:00 AM in Sri Lanka time
    const todaySixAM = new Date(sriLankaTime);
    todaySixAM.setHours(6, 0, 0, 0);
    
    // If current time is before 6 AM, use yesterday's 6 AM as reference
    const lastSixAM = sriLankaTime.getTime() < todaySixAM.getTime() 
      ? new Date(todaySixAM.getTime() - 24 * 60 * 60 * 1000) 
      : todaySixAM;
    
    const lastSixAMTimestamp = lastSixAM.getTime();
    
    // Check if we should increment (visitor hasn't visited since last 6 AM)
    const storedLastUpdate = localStorage.getItem(LAST_UPDATE_KEY);
    let shouldIncrement = false;
    
    if (!storedLastUpdate) {
      // First visit ever - increment from 0
      shouldIncrement = true;
    } else {
      const lastUpdateTimestamp = parseInt(storedLastUpdate, 10);
      // If last visit was before the most recent 6 AM
      if (lastUpdateTimestamp < lastSixAMTimestamp) {
        shouldIncrement = true;
      }
    }

    if (shouldIncrement) {
      // Increment views
      currentViews += 1;
      
      // Store updated values with current timestamp
      localStorage.setItem(VIEWS_STORAGE_KEY, currentViews.toString());
      localStorage.setItem(LAST_UPDATE_KEY, sriLankaTime.getTime().toString());
    }

    // Update state
    setViews(currentViews);
    
    // Format last updated time
    const formattedTime = sriLankaTime.toLocaleString('en-US', {
      timeZone: 'Asia/Colombo',
      dateStyle: 'medium',
      timeStyle: 'short',
    });
    setLastUpdated(formattedTime);

  }, [initialViews]);

  return { views, lastUpdated };
};
