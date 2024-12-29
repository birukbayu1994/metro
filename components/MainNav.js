// components/MainNav.js

import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MainNav() {
  const router = useRouter();
  const [searchField, setSearchField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchField.trim() !== '') {
      router.push(`/artwork?title=true&q=${searchField}`);
      setSearchField('');
    }
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top" className="navbar-dark bg-primary">
        <Container>
          <Navbar.Brand>Biruk Abebe</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/search" passHref legacyBehavior>
              <Nav.Link>Advanced Search</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />
            <Button type="submit" variant="success">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
