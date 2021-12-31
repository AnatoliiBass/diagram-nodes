import style from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className={style.wrapper}>
      <HeaderContainer />
      <Main />
      <Sidebar />
    </div>
  )
}

export default App;
