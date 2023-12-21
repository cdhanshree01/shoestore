import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../Products/Products';
import SignUp from '../SignUp/SignUp';
import Cart from '../Cart/Cart';

const Myroutes = ({
  productItems, // Assuming this is the source of products
  filteredProducts, // Assuming this is the filtered list of products
  handleAddProduct,
  cartItems,
  handleClearCart,
  handleRemoveProduct,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              productItems={productItems}
              filteredProducts={filteredProducts}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleClearCart={handleClearCart}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Myroutes;
