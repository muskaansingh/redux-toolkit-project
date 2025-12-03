import { useDispatch, useSelector } from "react-redux";
import headphoneImg from "../assets/headphones.jpeg";
import { addItem, removeItem } from "../redux/slice";
import { fetchProducts } from "../redux/ProductSlice";
import { useEffect } from "react";

const ProductCard = () => {
  const dispatch = useDispatch(); //dispatch -> send data to the store
  const selector = useSelector((state) => state.products.items);
  console.log("selector", selector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-card">
      <img src={headphoneImg} alt="Product" className="product-img" />

      <div className="product-content">
        <h2 className="product-title">Wireless Headphones</h2>

        <p className="product-price">$129.99</p>

        <p className="product-desc">
          Experience high-quality sound with these wireless headphones.
          Featuring noise cancellation, long-lasting battery life, and a sleek
          modern design for everyday use.
        </p>

        <div className="product-actions">
          <button onClick={() => dispatch(addItem(1))} className="add-btn">
            Add to Cart
          </button>

          <button
            onClick={() => dispatch(removeItem(1))}
            className="add-btn remove-cart"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

//    <div
//       id="cartPanel"
//       className="cart-panel"
//       role="region"
//       aria-label="Cart items"
//     >
//       <div style={{ fontWeight: 700, marginBottom: 8 }}>Cart</div>

//       <div className="cart-item">
//         <div className="thumb">A</div>
//         <div className="item-info">
//           <div className="item-title">Wireless Headphones</div>
//           <div className="item-meta">Qty 1 · Black</div>
//         </div>
//         <div className="price">₹2,199</div>
//       </div>

//       <div className="cart-item">
//         <div className="thumb">B</div>
//         <div className="item-info">
//           <div className="item-title">Portable Charger</div>
//           <div className="item-meta">Qty 1 · 20,000 mAh</div>
//         </div>
//         <div className="price">₹1,099</div>
//       </div>

//       <div className="cart-footer">
//         <div style={{ fontWeight: 700 }}>Total: ₹3,298</div>
//         <div>
//           <button className="view-cart" onClick={() => alert("Go to cart")}>
//             View cart
//           </button>

//           <button className="checkout" onClick={() => alert("Checkout")}>
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
