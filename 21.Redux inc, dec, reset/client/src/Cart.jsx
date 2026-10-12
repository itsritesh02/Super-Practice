import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  removeFromCart,
  clearCart,
} from "./CartSlice";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>

              <p>₹{item.price}</p>

              <button onClick={() => dispatch(decrement(item.id))}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => dispatch(increment(item.id))}>
                +
              </button>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}

          <br />

          <button onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;