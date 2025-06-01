//import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Hom from './components/home';
import Desktop1 from './components/desktop1';
import Desktop2 from './components/desktop2';
import {BrowserRouter,Route,Routes,Switch } from 'react-router-dom';
import Reg from './components/register';
import Log from './components/Login';
import Err from './components/error';
import ProductPage from './components/pl';
import Profilesetting from './components/profilesetting';
import Cart from './components/cart';
import Wish from './components/wishlist';
import Adm1 from './components/adminPortal';
import Check from './components/checkout';
import ProductPage2 from './components/pl1';
import { UserProvider } from './context/UserContext';
import WishlistPage from './components/newWishlist';
import WishlistPage3 from './components/wish';
import ProductPage3 from './components/pl3';
import ProductDescription from './components/descriptionPL';
import SneakerDescription from './components/productdes';
import CartPage from './components/newCart';
import Profile from './components/profile';
function App() {
  return (
    <>
    <UserProvider>
    <div style={{background: 'linear-gradient(180deg, #FFF 2%, #75A9CF 100%)'}}>
    <BrowserRouter>
    <Nav />
       <Routes>
       <Route path="/" element={<Desktop2 />}></Route>
       <Route path="/login" element={<Log />}></Route>
       <Route path="/register" element={<Reg />}></Route> 
       <Route path="/*" element={<Err />}></Route> 
       {/*<Route path="/product" element={<ProductPage />}></Route>*/} 
       <Route path="/product" element={<ProductPage3 />}></Route>           {/*product upgrade*/}
       {/*<Route path="/products/:id" element={<ProductDescription />} />*/}
       <Route path="/products/:id" element={<SneakerDescription />} />
       <Route path="/profile" element={<Profile />}></Route>
       <Route path="/cart" element={<CartPage />}></Route>  
       {/*<Route path="/wishlist" element={<Wish />}></Route>  */}
       <Route path="/wish" element={<WishlistPage />}></Route>  
       <Route path="/wishlist" element={<WishlistPage3 />}></Route>
       <Route path="/admin" element={<Adm1 />}></Route>
       <Route path="/check" element={<Check />}></Route>
       </Routes>
    </BrowserRouter>
    </div>
    </UserProvider>
    </>
  );
}

export default App;
