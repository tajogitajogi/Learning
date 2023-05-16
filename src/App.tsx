import React, { Suspense, useContext, useState } from "react"
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { AboutPageAsync } from "./page/AboutPage/AboutPage.async";
import { MainPageAsync } from "./page/MainPage/MainPage.async";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { ClassNames } from "./helpers/classNames/ClassNames";





const App = () => {
  const {theme,changeTheme}=useTheme();
  return (
    <div className={ClassNames('app',{},[theme])}>
      <button onClick={changeTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
            <Route path={'/about'} element={<AboutPageAsync/>}/>

            <Route path={'/'} element={<MainPageAsync/>}/>
          
        </Routes>
      </Suspense>
    </div>
  )
};

export default App;
