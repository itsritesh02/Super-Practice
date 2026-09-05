import { useState,useEffect } from "react";

function App(){

  const [products, setProducts] = useState([]);

 

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);

      } catch (err) {
        console.log("Error", err.message);

      }
    }


    fetchProducts();
  },[]);


  

  return(
    <div>

      <h1>Products</h1>

      {products.map((products)=>{
        return(
          <div key={products.id}>
            <h3>{products.title}</h3>
            <p>price:$ {products.price}</p>
            <img src={products.thumbnail} alt={products.title} />
          </div>
        )
      })}
    </div>
  )
}
export default App;