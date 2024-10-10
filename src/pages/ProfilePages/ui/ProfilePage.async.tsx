import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // for demo purposes
    setTimeout(() => resolve(import('./ProfilePage')), 500);
}));
