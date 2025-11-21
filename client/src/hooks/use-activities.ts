import { useState, useEffect } from 'react';

export interface Activity {
    id: string;
    name: string;
    category: string;
    duration: number;
    startTime: string;
    color: string;
}

const STORAGE_KEY = 'lock_in_activities';

export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                setActivities(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse activities', e);
            }
        }
    }, []);

    const addActivity = (activity: Omit<Activity, 'id'>) => {
        const newActivity = {
            ...activity,
            id: crypto.randomUUID(),
        };

        const updatedActivities = [newActivity, ...activities];
        setActivities(updatedActivities);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedActivities));
        return newActivity;
    };

    const clearActivities = () => {
        setActivities([]);
        localStorage.removeItem(STORAGE_KEY);
    };

    return {
        activities,
        addActivity,
        clearActivities
    };
}
