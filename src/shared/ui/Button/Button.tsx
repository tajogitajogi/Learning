import { ButtonHTMLAttributes, FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/ClassNames'
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  CLEARINVERTED = 'inverted',
  OUTLINEINVERTED = 'outlineinverted'

}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton
  square?: boolean,
  size?: SizeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, size, ...otherProps } = props
    const mods: Record<string, boolean> = {
        [cls.square]: square

    }
    return (
        <button className={ClassNames(cls.Button, mods, [className, cls[theme], cls[size]])} {...otherProps}>
            {children}
        </button>
    );
}
