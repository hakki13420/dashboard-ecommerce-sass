import './App.scss';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import User from './pages/users/User';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import CreateUser from './pages/users/createUser';
import Products from './pages/products/products';
import CreateProduct from './pages/products/createProduct';
import Product from './pages/products/product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />      
        <div className="container">
          <SideBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user/edit/:id' element={<User />} />
            <Route path='/user/create' element={<CreateUser />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/create' element={<CreateProduct />} />
            <Route path='/product/edit/:id' element={<Product />} />
          </Routes>          
        </div>
      </BrowserRouter>        
    </div>
  );
}

export default App;
