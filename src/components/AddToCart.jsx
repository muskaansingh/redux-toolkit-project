import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items); //useSelector is used to get data from the store

  return (
    <Link to="/cart" className="cart-link">
      <img
        src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png"
        alt="cart"
        className="cart-img"
      />
      <span className="badge" id="cartBadge">
        {cartSelector.length ? cartSelector.length : 0}
      </span>
    </Link>
  );
};

export default AddToCart;
