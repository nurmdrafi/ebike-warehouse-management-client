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
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className='d-flex flex-column'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/inventory/:_id" element={<RequireAuth><Inventory /></RequireAuth>}></Route>
        <Route path="/manage-inventory" element={<RequireAuth><ManageInventories /></RequireAuth>}></Route>
        <Route path="/add-items" element={<RequireAuth><AddItems /></RequireAuth>}></Route>
        <Route path="/my-items" element={<RequireAuth><MyItems /></RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer className="mt-auto"></Footer>
    </div>
  );
}

export default App;
