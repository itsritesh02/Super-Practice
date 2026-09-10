const ProductList = ({products,addToCart})=>{
  return (
<div>
 <h1>Products</h1>

 {products.map((product)=>{
   return (
   <div key={product.id}>
       <h3>{product.title}</h3>
       <p>{product.price}</p>

       <button onClick={() => addToCart(product)}>Add To cart</button>
   </div>
   )
 }
 
 )}
</div>
  )
}
export default ProductList;