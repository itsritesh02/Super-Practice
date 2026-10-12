import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;