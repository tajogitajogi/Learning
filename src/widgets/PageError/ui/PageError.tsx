import { FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/ClassNames'
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()

    const reloadpage = () => {
        location.reload()
    }

    return (
        <div className={ClassNames(cls.PageError, {}, [className])}>
            <p className={cls.p}>{t('Не предвиденная ошибка')}</p>
            <Button onClick={reloadpage}>
                {t('Обновить страницy')}
            </Button>
        </div>
    );
}
