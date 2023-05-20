import './styles/index.scss'
import { ClassNames } from "shared/lib/classNames/ClassNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";





const App = () => {
  const {theme}=useTheme();
  return (
    <div className={ClassNames('app',{},[theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
};

export default App;
