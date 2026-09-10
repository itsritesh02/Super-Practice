function Cart({ cart,
  increase,
  decrease,
  removeFromCart }){

    const total = cart.reduce((sum,product)=>{
      return sum+ product.price*product.quantity;
    },0);
  return(
    <div>

      <h1>Cart</h1>
      {cart.map((product)=>{
        return(
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => decrease(product.id)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => increase(product.id)}>+</button>
            <button onClick={() => removeFromCart(product.id)}>Remove From Cart</button>
            <h2>Total$: {total.toFixed(2)}</h2>
          </div>
        )
      })}
    </div>
  )
}
export default Cart;