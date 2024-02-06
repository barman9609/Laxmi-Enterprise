import{Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';

  import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateProduct from './pages/Admin/CreateProduct';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Product';
import AdminOrders from './pages/Admin/AdminOrders';
import UpdateProduct from './pages/Admin/UpdateProduct';
import CreateCategory from './pages/Admin/CreateCategory';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/search' element={< Search/>} />
      <Route path='/product/:slug' element={<ProductDetails />} />
      <Route path='/cart' element={< CartPage/>} />
      <Route path='/dashboard' element = {<PrivateRoute/>} >
         <Route path='user' element={<Dashboard/>} />
         <Route path='user/orders' element={<Orders/>} />
         <Route path='user/profile' element={<Profile/>} />
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}> 
          <Route path='admin' element={<AdminDashboard/>} />
          <Route path='admin/create-product' element={<CreateProduct/>} />
          <Route path='admin/create-category' element ={<CreateCategory/>} />
          <Route path='admin/product/:slug' element={< UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/orders" element={<AdminOrders/>} />
      </Route>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/policy' element={<Policy/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Pagenotfound/>} />
    </Routes>
    </>
  );
}

export default App;
