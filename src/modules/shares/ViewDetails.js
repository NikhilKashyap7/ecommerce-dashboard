import React, { useEffect } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Cartredux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductModal = ({ show, handleClose, product }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.darkMode);

  const addingtoCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: darkMode ? 'dark' : 'light',
    });
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  if (!product) return null;

  const backgroundClick = e => {
    if (e.target.classList.contains('modal-overlay')) {
      handleClose();
    }
  };

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''} modal-overlay`}
      tabIndex="-1"
      role="dialog"
      aria-hidden={!show}
      onClick={backgroundClick}
      style={{ background: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog modal-lg">
        <div className={`modal-content ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
          <div className="modal-header">
            <h5 className="modal-title">{product?.title ?? 'Unknown Product'}</h5>
            <button type="button" className="btn-close btn-warning" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                {product?.images?.length > 0 ? (
                  <img src={product.images[0]} alt="Product" className="img-fluid" />
                ) : (
                  <p className="text-muted">No Image Available</p>
                )}
              </div>
              <div className="col-md-6">
                <p><strong>Brand:</strong> {product?.brand ?? 'N/A'}</p>
                <p><strong>Category:</strong> {product?.category ?? 'N/A'}</p>
                <p><strong>Price:</strong> ${product?.price ?? 'N/A'}</p>
                <p><strong>Stock:</strong> {product?.stock ?? 'Out of stock'}</p>
                <p><strong>Rating:</strong> <FaStar className="rating" /> {product?.rating ?? 'N/A'}</p>
                <p><strong>Description:</strong> {product?.description ?? 'No description available'}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-warning" onClick={addingtoCart}>
              <FaShoppingCart /> Add to Cart
            </button>
            <button type="button" className="btn btn-danger">
              <AiFillThunderbolt /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;