import { FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/ClassNames'
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props
    return (
        <div className={ClassNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
}
