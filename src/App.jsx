import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import ProductCart from "./components/ProductCart";
import CartListing from "./components/CartListing";
import { removeAllItem } from "./redux/slice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductCart />} />
        <Route path="/cart" element={<CartListing />} />
      </Routes>

      {/* <div className="app-header">
        <h1>Redux Toolkit Project</h1>
        <button
          onClick={() => dispatch(removeAllItem())}
          className="add-btn remove-cart"
        >
          Remove ALL Items
        </button>
      </div> */}
    </BrowserRouter>
  );
};

export default App;
