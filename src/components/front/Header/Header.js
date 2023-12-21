import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import searchProducts from './Header'

const Header = ({ filterProducts, handleSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterProducts(category);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    // const filtered = searchProducts(searchTerm); // Use your searchProducts function here
    // filterProducts(filtered); // Update the filtered products using filterProducts
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">


      <Container>

        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHg-VLIhuXLWw/profile-displayphoto-shrink_800_800/0/1644455216774?e=2147483647&v=beta&t=7eeVMJr6ORk8nMTBkDKnUPCf4ZSeLXc4KuPmGUeqhwQ"
              height="100"
              className="d-inline-block align-top"
              alt="Nike"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">

          <Nav>
            <Nav.Link>
              <Form onSubmit={handleSearchSubmit} inline>


                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />

              </Form>
            </Nav.Link>


            <Nav.Link>
              <Button variant="light" type="submit">
                Search
              </Button>
            </Nav.Link>


            <Nav.Link as={Link} to="/" onClick={() => handleCategoryClick('all')}>
              <Button variant="light">All</Button>
            </Nav.Link>

            <Nav.Link as={Link} to="/" onClick={() => handleCategoryClick('men')}>
              <Button variant="light">Men's</Button>
            </Nav.Link>

            <Nav.Link as={Link} to="/" onClick={() => handleCategoryClick('women')}>
              <Button variant="light">Women's</Button>
            </Nav.Link>

            <Nav.Link as={Link} to="/" onClick={() => handleCategoryClick('kids')}>
              <Button variant="light">Kids's</Button>
            </Nav.Link>

            <Nav.Link as={Link} to="/SignUp">
              <Button variant="light">SignUp</Button>
            </Nav.Link>

            <Nav.Link as={Link} to="/Cart">
              <Button variant="light">Cart</Button>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Header;
