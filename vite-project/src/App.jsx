import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Convert product prices to INR (for demonstration, assume 1 USD = 82.5 INR)
        const convertedProducts = data.map((product) => ({
          ...product,
          price: (product.price * 82.5).toFixed(2),
        }));
        setProducts(convertedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} openCart={toggleModal} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {isModalOpen && (
        <CartModal cart={cart} removeFromCart={removeFromCart} closeModal={toggleModal} />
      )}
    </div>
  );
};

export default App;