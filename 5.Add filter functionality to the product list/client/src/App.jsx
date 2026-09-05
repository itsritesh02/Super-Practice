import { useEffect, useState } from "react";

function App(){
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(()=>{
  const fetchProducts = async()=>{
    try{
const response = await fetch("https://dummyjson.com/products");
const data = await response.json();
setProducts(data.products)

    }
    catch(err){
      console.log("errot",err);
      
    }
  }



    fetchProducts();
  },[])

  const filterProducts = products.filter((product)=>{
    return(
      category === "" || product.category == category
    )
  })

  
return(
  <div>
    <h1>Products</h1>
    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
      <option value="">All</option>
      <option value="beauty">beauty</option>
      <option value="fragrances">fragrances</option>
      <option value="furniture">Furniture</option>
    </select>
    {filterProducts.map((product)=>{
      return(
        <>
          <h3>{product.title}</h3>
          <p>price${product.price}</p>
          <img src={product.thumbnail} alt="" />
          </>
      )
    })}
  </div>
)
}
export default App;