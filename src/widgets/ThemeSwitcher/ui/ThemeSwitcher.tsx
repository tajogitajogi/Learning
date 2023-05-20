import { Theme, useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import { ClassNames } from "shared/lib/classNames/ClassNames"
import cls from './ThemeSwitcher.module.scss';
import NightIcon from 'shared/assets/icons/night.svg'
import LightIcon from 'shared/assets/icons/light.svg'
import { Button, ThemeButton } from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string;
}



export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {

const {className} = props
    const {theme,changeTheme}=useTheme();
    return (
        <Button theme={ThemeButton.CLEAR} className={ClassNames(cls.ThemeSwitcher,{},[className])} onClick={changeTheme}>
            {theme === Theme.DARK ? <NightIcon className={cls.icons}/> : <LightIcon className={cls.icons}/>}
        </Button>
 );
}