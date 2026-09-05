const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) => {

  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  return (
    <div>

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (

        cart.map((product) => (

          <div key={product.id}>

            <h3>{product.title}</h3>

            <p>
              Price: ${product.price}
            </p>

            <button
              onClick={() => decreaseQuantity(product.id)}
            >
              -
            </button>

            <span> {product.quantity} </span>

            <button
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>

            <p>
              Subtotal: $
              {product.price * product.quantity}
            </p>

            <button
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>

            <hr />

          </div>

        ))

      )}

      <h2>Total: ${total}</h2>

    </div>
  );
};

export default Cart;