import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {

  const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        const data = await response.json();

        setProducts(data.products);

      } catch (err) {
        console.log("Error:", err.message);
      }
    };

    fetchProducts();

  }, []);

const addToCart = (product)=>{
setCart([...cart, product])
}

  return (
    <div>

      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
 
    </div>
  );
}

export default App;