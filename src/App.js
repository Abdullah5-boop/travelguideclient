import logo from './logo.svg';
import { Link } from "react-router-dom";
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header1 from './Component/Header/Header1';
import Cardinfo from './Component/Card/Cardinfo';
import Homeinfo from './Component/Home/Homeinfo';
import Login from './Component/Login/Login';

import SingOut from './Component/SignOut/SingOut';
import CheckOutpage from './Component/CheckOut/CheckOutpage';
import RequireAuth from './Component/RequireAuth';
import NavBar from './Component/Header/NavBar';
import Footer from './Component/Footer/Footer';
import Nodivice from './Component/Nodivice';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';

function App() {
  return (
    <div className="App h-100 formating">
      <Header1></Header1>
     
      <div>
      <Routes>
        <Route path='/card' element={<Cardinfo></Cardinfo> }></Route>
        <Route path='/home' element={<Homeinfo></Homeinfo>}></Route>
        <Route path='/' element={<Homeinfo></Homeinfo>}></Route>
        <Route path='/sinup' element={<SingOut></SingOut> }></Route>
        <Route path='/Login' element={<Login></Login> }></Route>
        <Route path='/about' element={<About></About> }></Route>
        <Route path='/blog' element={<Blog></Blog> }></Route>
        <Route path='/check' element={ <RequireAuth><CheckOutpage></CheckOutpage> </RequireAuth>}></Route>
        <Route path='*' element={<Nodivice></Nodivice>}></Route>
      </Routes>
      </div>
      <div className=' bg-danger h-100 fotter'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
