import { routeConfig } from "@/shared/config/routeConfig/routeConfig"
import { Suspense } from "react"
import { Route, Routes } from "react-router"

export const AppRouter = () => {
  return (
    <Suspense fallback={'Loading...'}>
            <Routes>
                    {
                        Object.values(routeConfig).map(({element, path}) => (
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
  )
}
