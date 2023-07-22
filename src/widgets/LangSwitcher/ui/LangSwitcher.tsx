/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/ClassNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { t, i18n } = useTranslation()
    const { className } = props

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (

        <Button className={ClassNames(cls.LangSwitcher, {}, [className])} theme={ThemeButton.CLEARINVERTED} onClick={toggle}>{t('RU')}</Button>
    );
}
