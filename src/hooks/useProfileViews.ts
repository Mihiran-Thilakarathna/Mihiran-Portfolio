import { useState, useEffect } from 'react';

const VIEWS_STORAGE_KEY = 'portfolio_profile_views';
const LAST_UPDATE_KEY = 'portfolio_last_update';
const VISITOR_ID_KEY = 'portfolio_visitor_id';

/**
 * Custom hook to track and display profile views
 * Updates the view count when a new visitor arrives
 */
export const useProfileViews = (initialViews: number = 0) => {
  const [views, setViews] = useState<number>(initialViews);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Generate or retrieve visitor ID
    let visitorId = localStorage.getItem(VISITOR_ID_KEY);
    if (!visitorId) {
      visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }

    // Get stored view count
    const storedViews = localStorage.getItem(VIEWS_STORAGE_KEY);
    const storedLastUpdate = localStorage.getItem(LAST_UPDATE_KEY);
    
    let currentViews = initialViews;
    
    if (storedViews) {
      currentViews = parseInt(storedViews, 10);
    }

    // Check if we should increment (new day or first visit)
    const now = new Date();
    const today = now.toDateString();
    
    if (storedLastUpdate !== today) {
      // Increment views for new day/session
      currentViews += 1;
      
      // Store updated values
      localStorage.setItem(VIEWS_STORAGE_KEY, currentViews.toString());
      localStorage.setItem(LAST_UPDATE_KEY, today);
    }

    // Update state
    setViews(currentViews);
    setLastUpdated(now.toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }));

    // Optional: Send to analytics or backend
    // trackPageView(currentViews);

  }, [initialViews]);

  return { views, lastUpdated };
};
