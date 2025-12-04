const CartListing = () => {
  return (
    <div className="cart-page">
      <div className="cart-page-title">Your Cart Items</div>

      <div className="cart-list">
        <div className="cart-item">
          <div className="thumb">A</div>
          <div className="item-info">
            <div className="item-title">Wireless Headphones</div>
            <div className="item-meta">Qty 1 · Black</div>
          </div>
          <div className="price">₹2,199</div>
        </div>

        <div className="cart-item">
          <div className="thumb">B</div>
          <div className="item-info">
            <div className="item-title">Portable Charger</div>
            <div className="item-meta">Qty 1 · 20,000 mAh</div>
          </div>
          <div className="price">₹1,099</div>
        </div>
      </div>

      <div className="cart-summary">
        <div className="cart-summary-total">Total: ₹3,298</div>

        <div className="cart-summary-buttons">
          <button
            className="view-cart"
            onClick={() => alert("Continue shopping")}
          >
            Continue Shopping
          </button>

          <button className="checkout" onClick={() => alert("Checkout")}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartListing;
