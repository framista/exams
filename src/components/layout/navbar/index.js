import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toogleTheme } from '../../../redux/theme/actions';

const NavbarComponent = (props) => {
  const { background } = props;
  return (
    <Navbar collapseOnSelect expand="md" bg={background} variant="dark">
      <Form>
        <Form.Check
          className={`bg-${background}`}
          type="switch"
          id="custom-switch"
          label=""
          onClick={props.toogleTheme}
        />
      </Form>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="mr-4 my-2 text-light" to="/">
            Wszystkie
          </Link>
          <Link className="mr-4 my-2 text-light" to="/about">
            O stronie
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  background: state.theme.background,
});
const mapDispatchToProps = (dispatch) => ({
  toogleTheme: () => dispatch(toogleTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
