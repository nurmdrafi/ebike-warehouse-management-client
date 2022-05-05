import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory/Inventory';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import ManageInventories from './components/Inventory/ManageInventories/ManageInventories';
import MyItems from './components/Inventory/MyItems/MyItems';
import LogIn from './components/Auth/LogIn/LogIn';
import Register from './components/Auth/Register/Register';
import AddItems from './components/Inventory/AddItems/AddItems';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:id" element={<Inventory></Inventory>}></Route>
        <Route path="/manage-inventory" element={<ManageInventories></ManageInventories>}></Route>
        <Route path="/add-items" element={<AddItems></AddItems>}></Route>
        <Route path="/my-items" element={<MyItems></MyItems>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
