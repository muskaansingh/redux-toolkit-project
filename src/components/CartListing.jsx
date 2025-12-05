import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeAllItem, removeItem, updateQuantity } from "../redux/slice";

const CartListing = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(cartSelector);
  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      item.quantity ? (acc + item.price) * item.quantity : acc + item.price,
    0
  );

  const manageQuantity = (id, qty) => {
    // let quantity = qty > 1 ? qty : 1;
    let quantity = parseInt(qty) > 1 ? parseInt(qty) : 1; // just to ensure qty is an integer

    const cartTempItems = cartItems.map((item) => {
      return item.id === id ? { ...item, quantity } : item; // enter quantity in the item
    });

    setCartItems(cartTempItems);
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleOrderPlaced = () => {
    localStorage.clear();
    dispatch(removeAllItem());
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="cart-page">
      <div className="cart-page-title">
        <h2> Your Cart Items</h2>
        <div>({cartItems.length} items)</div>
      </div>

      <div className="cart-list">
        {cartItems && !cartItems.length ? (
          <p style={{ padding: 20, textAlign: "center", color: "#666" }}>
            Your cart is empty.
          </p>
        ) : (
          cartItems &&
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} className="thumb" alt={item.title} />

              <div className="item-info">
                <div className="item-title">{item.title}</div>
                <div className="item-meta">Qty 1</div>
              </div>

              <div className="item-actions">
                <input
                  type="number"
                  placeholder="Enter Quantity"
                  className="qty-input"
                  onChange={(e) => manageQuantity(item.id, e.target.value)}
                  value={item.quantity ? item.quantity : 1}
                />
                <div className="qty-price">
                  $
                  {(item.quantity
                    ? item.price * item.quantity
                    : item.price
                  ).toFixed(2)}
                </div>
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="remove-item"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <div className="cart-summary-total">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <div className="cart-summary-buttons">
            <Link to="/">
              <button className="view-cart">Continue Shopping</button>
            </Link>

            <button className="checkout" onClick={handleOrderPlaced}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartListing;
