import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Routers/Home/Home';
import UserHome from './Routers/User/UserHome';
import RestaurantsHome from './Routers/Restaurants/RestaurantsHome';
import Signin from './Routers/SignIn/Signin';
import Signup from './Routers/SignUp/Signup';
import SignupUser from './Routers/SignUp/SignupUser';
import SignupRest from './Routers/SignUp/SignupRest';
import NavigationBar from './Routers/Navigation/Navbar';
 //import BGImage from '../src/Assets/i-like-food.svg';
// style={{backgroundImage:`url(${BGImage})`}}

import HomeVideo from './Routers/Home/HomeVideo';


import Delivery from './Components/User/Cart';
import OrderHistory from './Components/User/OrderHistory';
import UserProfile from './Components/User/UserProfile';
import YourOrders from './Components/User/YourOrders';
import UserHomeDiv from './Components/User/UserHomeDiv';

import DishView from './Components/User/DishView';


import ActiveOrder from './Components/Restaurant/ActiveOrder';
import PastOrder from './Components/Restaurant/PastOrder';
import RestProfile from './Components/Restaurant/RestProfile';
import AddDish from './Components/Restaurant/AddDish';
import RestHome from './Components/Restaurant/RestHome';
import EditDish from './Components/Restaurant/EditDish';

function App() {
  return (
    <div >
      <NavigationBar  ></NavigationBar>
     <Routes>
  

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/UserHome" element={<UserHome></UserHome>}>
         <Route path="" element={<UserHomeDiv></UserHomeDiv>}></Route>
         <Route path="Cart" element={<Delivery></Delivery>}></Route>
         <Route path="YourOrders" element={<YourOrders></YourOrders>}></Route>
         <Route path="OrderHistory" element={<OrderHistory></OrderHistory>}></Route>
         <Route path="UserProfile" element={<UserProfile></UserProfile>}></Route>
         <Route path="view/:dishId" element={<DishView></DishView>}></Route>
      </Route>
      <Route path="/RestaurantHome" element={<RestaurantsHome></RestaurantsHome>} >
         <Route path="" element={<RestHome></RestHome>}></Route>
         <Route path="AddDish" element={<AddDish></AddDish>}></Route>
         <Route path="ActiveOrder" element={<ActiveOrder></ActiveOrder>}></Route>
         <Route path="PastOrder" element={<PastOrder></PastOrder>}></Route>
         <Route path="RestProfile" element={<RestProfile></RestProfile>}></Route>
         <Route path="edit/:dishId" element={<EditDish></EditDish>}></Route>
      </Route>
      <Route path="/SignIn" element={<Signin></Signin>}></Route>
      <Route path='SignUp' element={<Signup></Signup>}>
        <Route index path='User' element={<SignupUser></SignupUser>}></Route>
        <Route path='Restaurant' element={<SignupRest></SignupRest>}></Route>
     </Route>
     </Routes>
     </div>
  );
}

export default App;
