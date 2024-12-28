import PropTypes from "prop-types";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="navbar">
      <h1>Fake Store</h1>
      <button className="cart-button" onClick={openCart}>
        Cart ({cartCount})
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
  openCart: PropTypes.func.isRequired,
};

export default Navbar;