import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback="Loading...">
        <Routes>
            {
                Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))
            }
        </Routes>
    </Suspense>
);
