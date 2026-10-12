import Product from "./Product";
import Cart from "./Cart";

function App() {
  const products = [
    {
      id: 1,
      title: "Mobile",
      price: 20000,
    },
    {
      id: 2,
      title: "Laptop",
      price: 50000,
    },
    {
      id: 3,
      title: "Headphone",
      price: 2000,
    },
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}

      <Cart />
    </div>
  );
}

export default App;