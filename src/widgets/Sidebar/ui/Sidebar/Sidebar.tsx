import { FC, useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/ClassNames'
import { LangSwitcher } from 'widgets/LangSwitcher';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(true)

    const changeCollapsed = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid="sidebar" className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button className={cls.openclose} onClick={changeCollapsed} 
                theme={ThemeButton.CLEARINVERTED} 
                square 
                size={SizeButton.XL} >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.main} className={cls.link}>{t('Основная страница')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.about} className={cls.link}>{t('О сайте')}</AppLink>
            </div>
            <div className={cls.switchers}>
                
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
}
