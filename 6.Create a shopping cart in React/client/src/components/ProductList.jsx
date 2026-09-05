

const ProductList = ({products,addToCart}) => {
  return (
    <div>
   <h1>Products</h1>
   {products.map((product)=>{
    return(

      <div key={product.id}>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>

        <img
          src={product.thumbnail}
          alt={product.title}
          width="150"
        />

        <br />

        <button onClick={()=>addToCart(product)}>Add To Cart</button>
      </div>



    )
   })}
    </div>
  )
}

export default ProductList
