import logo from './logo.svg';
import './App.css';
// import TabChange from './components/tab/tabChange';
import Login from './components/login/login'

import ImageContainer from './components/imgContainer/imgContainer';
import Header from './components/header/header';
import Books from './components/booksCard/books'
import Dashboard from './pages/dashboard/dashboard';
import BookSummery from './components/bookSummery/bookSummery';
import MyCart from './components/myCart/myCart';
import Router1 from './components/router/router1';
import CustomerDetails from './components/customerDetails/customerDetails';
import OrderSummery from './components/orderSummery/orderSummery';
import PlaceOrder from './components/placeOrder/placeOrder';
import MyWishlist from './components/myWishlist/myWishlist';
import PaginationPage from './components/pagination/pagination';
import Footer from './components/footer/footer';

function App() {
 
  return (
    <div className="App">
    {/* <Header/> */}
     {/* <ImageContainer/> */}
     {/* <Books/> */}
     {/* <Dashboard/> */}
     {/* <BookSummery/> */}
     {/* <MyCart/> */}
     <Router1/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
