import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import ProductCart from "./components/ProductCart";
import { removeAllItem } from "./redux/slice";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="app-header">
        <h1>Redux Toolkit Project</h1>
        <button
          onClick={() => dispatch(removeAllItem())}
          className="add-btn remove-cart"
        >
          Remove ALL Items
        </button>
      </div>

      <ProductCart />
    </>
  );
};

export default App;
