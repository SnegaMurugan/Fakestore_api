import PropTypes from "prop-types";

const CartModal = ({ cart, removeFromCart, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Cart</h2>
        <button className="close-modal" onClick={closeModal}>
          Close
        </button>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>₹{item.price}</p> {/* Display price with ₹ symbol */}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

CartModal.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CartModal;