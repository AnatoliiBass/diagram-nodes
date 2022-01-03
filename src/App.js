import style from './App.module.css';
import ExtraTablesContainer from './components/ExtraTables/ExtraTablesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = () => {
  return (
    <div className={style.wrapper}>
      <HeaderContainer />
      <Main />
      <SidebarContainer />
      <ExtraTablesContainer />
    </div>
  )
}

export default App;
