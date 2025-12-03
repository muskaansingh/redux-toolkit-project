import { useSelector } from "react-redux";

const AddToCart = () => {
  const selector = useSelector((state) => state.cart.value);

  return (
    <div>
      <div className="controls">
        <button
          className="cart-btn"
          id="cartBtn"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="cartPanel"
        >
          <svg className="cart-icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3h2l.8 4M7 13h10l3-8H6.2"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="badge" id="cartBadge">
            {selector}
          </span>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
