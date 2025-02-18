import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, saveForLater, increaseQuantity, decreaseQuantity } from "../redux/Cartredux";
import { Link } from "react-router-dom";
import Mynavbar from "../shares/Mynavbar";
import ProductModal from "../shares/ViewDetails"; // Import the ProductModal component

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null); // To hold the selected product for the modal
  const [showModal, setShowModal] = useState(false); // To control the visibility of the modal

  const handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this item from your cart?");
    if (confirmRemove) {
      dispatch(removeFromCart(id)); // Remove item from cart
    }
  };

  const handleSaveForLater = (product) => {
    dispatch(saveForLater(product)); // Move item to wishlist
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id)); // Increase item quantity
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id)); // Decrease item quantity
  };

  // Define the handleViewDetails function
  const handleViewDetails = (product) => {
    setSelectedProduct(product); // Set the selected product for the modal
    setShowModal(true); // Show the modal
  };

  return (
    <>
      <Mynavbar />
      <div className="container mt-4">
        <h2 className="mb-4">🛒 Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/shop">Go shopping!</Link></p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.images[0]} alt={item.title} style={{ width: "50px", height: "50px" }} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-sm btn-secondary me-2" onClick={() => handleDecrease(item.id)}>-</button>
                    {item.quantity}
                    <button className="btn btn-sm btn-secondary ms-2" onClick={() => handleIncrease(item.id)}>+</button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm me-2" onClick={() => handleRemove(item.id)}>Remove</button>
                    <button className="btn btn-info btn-sm" onClick={() => handleSaveForLater(item)}>Save for later</button> {/* Add to Wishlist button */}
                    <button className="btn btn-info btn-sm ms-2" onClick={() => handleViewDetails(item)}>View Details</button> {/* View Details button */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {cartItems.length > 0 && (
          <div className="text-end">
            <h4>
              Total: $
              {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </h4>
            <button className="btn btn-success">Proceed to Checkout</button>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          show={showModal}
          handleClose={() => setShowModal(false)} // Close modal handler
          product={selectedProduct} // Pass the selected product to the modal
        />
      )}
    </>
  );
};

export default CartPage;
