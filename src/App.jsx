import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/Product"   
import Register from "./pages/Register"
import {useSelector} from "react-redux"
import ProductList from "./pages/ProductList"
import {Routes,Route,Navigate} from "react-router-dom"

const App = () => {
  const user = useSelector(state=>state.user.currentUser)
  

  
  return (                 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category/" element={<ProductList />} />
        <Route path="/product/:id/" element={<Product />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/login/" element={user ? <Navigate to ="/"/> : <Login />} />
        <Route path="/register/" element={user ? <Navigate to ="/"/> : <Register />}/>  
      </Routes>
  )
};

export default App;
