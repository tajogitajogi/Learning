import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFound } from 'pages/NotFound'
import { RouteProps } from 'react-router-dom'

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'not_found'
}

export const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
    [AppRouter.NOTFOUND]: '*'
}

export const RouteConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RouterPath.main,
        element: <MainPage/>
    },
    [AppRouter.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage/>
    },
    [AppRouter.NOTFOUND]: {
        path: RouterPath.not_found,
        element: <NotFound />
    }

}
