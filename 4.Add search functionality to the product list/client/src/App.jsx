import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");




  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        const data = await response.json();
        setProducts(data.products)
      }
      catch (err) {
        console.log("Error: ", err);

      }
    }

    fetchProducts();
  }, [])


  const filterProducts = products.filter((product)=>(
    product.title.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <div>
      <h1>Products</h1>

      <input type="text" placeholder="Search Products" value={search} onChange={(e)=>setSearch(e.target.value)} />
      {filterProducts.map((product) => {
        return (
          <div>
            <h3>
              {product.title}
            </h3>

            <p>price:$ {product.price}</p>
            <img src={product.thumbnail} alt="" />

          </div>
        )
      })}
    </div>
  )
}
export default App;