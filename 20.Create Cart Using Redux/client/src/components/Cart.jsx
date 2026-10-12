import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  increment,
  decrement,
  removeFromCart,
  clearCart,
} from "../../redux/cartSlice.js"

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 70000,
    },
    {
      id: 2,
      name: "Samsung S24",
      price: 65000,
    },
    {
      id: 3,
      name: "OnePlus 13",
      price: 55000,
    },
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h1>Cart</h1>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(decrement(item.id))}>
            -
          </button>
          <button onClick={() => dispatch(increment(item.id))}>
            +
          </button>


          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <br />

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;