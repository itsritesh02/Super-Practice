import { useEffect, useState } from "react";
import ProductList from './components/ProductList'
import Cart from './components/Cart'
function App(){

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);



  useEffect(()=>{


    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");

      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  },[]);

  const addToCart = (product)=>{
    setCart(
      [...cart,{...product,quantity:1}]
    );
  }

const increase = (id)=>{
  setCart(cart.map((product)=>
    product.id===id ? {...product, quantity: product.quantity+1}:product
  )
)
};

const decrease = (id)=>{
  setCart(
    cart.map((product)=>
  product.id === id && product.quantity>1?
  {...product, quantity:product.quantity-1}:product
  ))
};

const removeFromCart = (id)=>{
  setCart(cart.filter((product)=>
  product.id!== id
  ))
};



return(
<div>
<ProductList products={products}  addToCart={addToCart}/>
<Cart cart={cart} increase={increase}  decrease={decrease} removeFromCart={removeFromCart} />

</div>
)
}
export default App;