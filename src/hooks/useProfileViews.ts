import { useState, useEffect } from 'react';

const VIEWS_STORAGE_KEY = 'portfolio_profile_views';
const LAST_UPDATE_KEY = 'portfolio_last_update';

let hasIncrementedThisLoad = false;

const sriLankaFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Colombo',
  dateStyle: 'medium',
  timeStyle: 'short',
});

/**
 * Tracks profile views locally and increments on every page load.
 * Uses a module-scoped guard to avoid double increments in React Strict Mode.
 */
export const useProfileViews = (initialViews: number = 0) => {
  const [views, setViews] = useState<number>(initialViews);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storage = window.localStorage;

    const storedViewsRaw = storage.getItem(VIEWS_STORAGE_KEY);
    const storedLastUpdatedRaw = storage.getItem(LAST_UPDATE_KEY);

    let storedViews = Number.parseInt(storedViewsRaw ?? '', 10);
    if (Number.isNaN(storedViews)) {
      storedViews = 0;
    }

    const baseline = Math.max(initialViews, storedViews);
    let nextViews = baseline;

    const now = new Date();
    const shouldIncrement = !hasIncrementedThisLoad;

    if (shouldIncrement) {
      nextViews = baseline + 1;
      storage.setItem(VIEWS_STORAGE_KEY, nextViews.toString());
      storage.setItem(LAST_UPDATE_KEY, now.toISOString());
      hasIncrementedThisLoad = true;
    }

    setViews(nextViews);

    const lastUpdateDate = shouldIncrement
      ? now
      : storedLastUpdatedRaw
        ? new Date(storedLastUpdatedRaw)
        : now;

    setLastUpdated(sriLankaFormatter.format(lastUpdateDate));
  }, [initialViews]);

  return { views, lastUpdated };
};
