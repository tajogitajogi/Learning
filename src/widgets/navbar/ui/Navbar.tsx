
import cls from './Navbar.module.scss'
import { ClassNames } from "shared/lib/classNames/ClassNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
    className?:string
}



export const Navbar = ({className}:NavbarProps,{},[]) => {
  return (
    <div className={ClassNames(cls.NavBar)}>
        <ThemeSwitcher/>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.Mainlink}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
        </div>   
    </div>
  )
};

export default Navbar;
