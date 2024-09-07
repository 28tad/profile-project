import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import './styles/index.scss'
import { useTheme } from "./themes/useTheme";



const App = () => {
   const { theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}/>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;