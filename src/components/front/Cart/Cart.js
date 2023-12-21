import React from 'react';
import { Button, Container, Image, Row, Col, Card } from 'react-bootstrap';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleClearCart }) => {
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <Container className="my-5">
      <h2 className="mb-4">Cart</h2>
      <Row>
        {/* Cart Items */}
        <Col>
          {cartItems.length > 0 && (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-3">
                  <Image src={item.image} alt={item.name} className="mr-3" style={{ width: '80px' }} />
                  <div className="flex-grow-1">
                    <h5>{item.name}</h5>
                    <div className="d-flex align-items-center">
                      <Button variant="primary" size="sm" onClick={() => handleRemoveProduct(item)}>
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button variant="primary" size="sm" onClick={() => handleAddProduct(item)}>
                        +
                      </Button>
                    </div>
                    <div>Rs {item.quantity * item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Col>

        {/* Order Summary */}
        <Col sm={3} className="justify-content-end">
          {cartItems.length > 0 && (
            <div className="mb-3">
              <Button variant="danger" size="sm" onClick={handleClearCart}>
                Clear Cart
              </Button>
            </div>
          )}
          <Card>
            <Card.Body>
              <Card.Title className="text-end">Subtotal: Rs {totalPrice}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
