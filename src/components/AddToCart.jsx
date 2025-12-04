import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <div>
      <img
        src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png"
        alt="cart"
        className="cart-img"
      />
      <span className="badge" id="cartBadge">
        {cartSelector.length ? cartSelector.length : 0}
      </span>
    </div>
  );
};

export default AddToCart;
