import { FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/ClassNames'

import './Loader.scss'

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props
    return (
        <div className={ClassNames('', {}, [className])}>
            <div className='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        </div>
    );
}
