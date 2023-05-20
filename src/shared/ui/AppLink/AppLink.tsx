import { FC } from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { ClassNames } from "shared/lib/classNames/ClassNames"
import cls from './AppLink.module.scss';


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}


interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = (props) => {

const {className,children,to,theme=AppLinkTheme.PRIMARY, ...otherProps} = props
    return (
        <Link to={to} 
            className={ClassNames(cls.AppLink,{},[className,cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
 );
}