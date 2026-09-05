
const Cart = ({ cart }) => {


  const total = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((product,i) => {
        return (
          <div key={i}>
            <h3>{product.title}</h3>

            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt="" />
          </div>
        )
      })}
      <h2>Total:${total}</h2>
    </div>
  )
}

export default Cart
