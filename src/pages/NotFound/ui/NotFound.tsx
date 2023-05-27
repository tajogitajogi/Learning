import { FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/ClassNames'
import cls from './NotFound.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
  className?: string;
}

export const NotFound: FC<NotFoundProps> = (props) => {
    const { t } = useTranslation()
    const { className } = props
    return (
        <div className={ClassNames(cls.NotFound, {}, [className])}>
            {t('Страница не найдена')}

        </div>
    );
}
