import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import LoginPage from './component/LoginPage';
import Navs from './component/Navs';
import SideBar from './component/SideBar';

function App() {
  return (
    <>
   <Navs/>
    <LoginPage/>
    <SideBar/>
   

   <Login/>
    </>
  );
}

export default App;
