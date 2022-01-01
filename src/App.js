import style from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = () => {
  return (
    <div className={style.wrapper}>
      <HeaderContainer />
      <MainContainer />
      <SidebarContainer />
    </div>
  )
}

export default App;
