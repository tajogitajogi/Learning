import { FC, useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/ClassNames'
import { LangSwitcher } from 'widgets/LangSwitcher';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(true)

  const changeCollapsed = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>

      <button onClick={changeCollapsed}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
}
