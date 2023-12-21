import React, { useState } from 'react';
import Header from './components/front/Header/Header';
import Myroutes from './components/front/Routes/Routes';
import { data } from './components/back/Data/data';
import Footer from './components/front/Footer/Footer';

function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productItems);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item
        )
      );
    }
  };

  const handleFilterProducts = (category) => {
    if (category === 'all') {
      setFilteredProducts(productItems);
    } else {
      const filtered = productItems.filter((item) => item.category === category);
      setFilteredProducts(filtered);
    }
  };
  const handleSearch = (searchTerm) => {
    // Function to filter products based on search term
    setSearchTerm(searchTerm);
    const filtered = productItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("filtered:",filtered);
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <Header filterProducts={handleFilterProducts} handleSearch={handleSearch}/>
      <Myroutes
        productItems={filteredProducts}
        handleAddProduct={handleAddProduct}
        cartItems={cartItems}
        handleClearCart={handleClearCart}
        handleRemoveProduct={handleRemoveProduct}
      />
      <div class="footer">
      <Footer/>
      </div>
    </div>
  );
}

export default App;
