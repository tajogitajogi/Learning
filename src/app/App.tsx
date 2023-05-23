import './styles/index.scss'
import { ClassNames } from 'shared/lib/classNames/ClassNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();
  return (

    <Suspense fallback="">
      <div className={ClassNames('app', {}, [theme])}>
        <Navbar/>
        <div className='content-page'>
          <Sidebar/>
          <AppRouter/>
        </div>

      </div>
    </Suspense>

  )
};

export default App;
