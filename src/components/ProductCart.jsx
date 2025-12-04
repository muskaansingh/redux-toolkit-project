import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";
import { fetchProducts } from "../redux/ProductSlice";
import { useEffect } from "react";

const ProductCard = () => {
  const dispatch = useDispatch(); //dispatch -> send data to the store
  const productSelector = useSelector((state) => state.products.items);
  const cartSelector = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid-card">
      {Array.isArray(productSelector) &&
        productSelector.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-img"
            />

            <div className="product-content">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-brand">{product.brand}</p>
              <p className="product-price">${product.price}</p>
              {/* <p className="product-desc">{product.description}</p> */}
              <p className="product-rating">{product.rating}</p>

              <div className="product-actions">
                {cartSelector.find((item) => item.id === product.id) ? (
                  <button
                    onClick={() => dispatch(removeItem(product))}
                    className="add-btn remove-cart"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addItem(product))}
                    className="add-btn"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
