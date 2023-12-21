import React from 'react';
import './Products.css';
import Sidebar from '../Sidebar/Sidebar';
import { Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const Products = ({ filteredProducts, productItems, handleAddProduct }) => {
  return (
    <div className='container'>
      <Row>


        {/* SIDEBAR */}


        <Col md={2} className='sidebar-column'>
          {/* <Sidebar /> */}
        </Col>
        <Col md={10}>
          <div className='products'>
            {productItems.map((productItem, i) => (
              <div key={i} className='card'>
                <div className='product_image'>
                  <img src={productItem.image} height={200} alt={productItem.name} />
                </div>
                <div>
                  <h5>{productItem.name}</h5>
                </div>
                <div>
                  <h6>Rs {productItem.price}</h6>
                </div>
                <div>
                  <button onClick={() => handleAddProduct(productItem)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      {/* <Footer/> */}
    </div>
  );

 
};

export default Products;
