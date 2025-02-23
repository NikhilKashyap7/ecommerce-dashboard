import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/Darkmode";
import { logout } from "../redux/Authredux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Mynavbar() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-light");
    }

    
    if (user) {
      toast.success(`Welcome, ${user.name || user.email}!`, {
        position: "top-right",
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: darkMode ? "dark" : "light",
      });
    }
  }, [darkMode, user]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    if (window.confirm("Do you want to logout?")) {
      dispatch(logout());
      navigate("/");
      toast.info("You have been logged out.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: darkMode ? "dark" : "light",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <nav
        className={`navbar navbar-expand-lg fixed-top ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} 
        ${!darkMode ? "navbar-light-bottom-shadow" : ""}`}
      >
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Company logo" className="img-fluid" style={{ width: "120px", height: "auto" }} />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/deals">Deals</Link></li>

              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown">
                  Categories
                </a>
                <ul className={`dropdown-menu ${darkMode ? "dropdown-menu-dark" : ""}`} aria-labelledby="categoriesDropdown">
                  <li><Link className="dropdown-item" to="/category/beauty">Beauty</Link></li>
                  <li><Link className="dropdown-item" to="/category/fragrances">Fragrances</Link></li>
                  <li><Link className="dropdown-item" to="/category/furniture">Furniture</Link></li>
                  <li><Link className="dropdown-item" to="/category/groceries">Groceries</Link></li>
                </ul>
              </li>
            </ul>

            
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <div className="input-group">
                <input
                  className={`form-control ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`} type="submit">
                  <FaSearch />
                </button>
              </div>
            </form>

            
            <ul className="navbar-nav ms-auto">
              
              <li className="nav-item">
                <Link className="nav-link" to="/mycart">
                  <FaShoppingCart />
                  {cartItems.length > 0 && <span className="badge bg-danger">{cartItems.length}</span>}
                </Link>
              </li>

              
              {user ? (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown">
                    {user.name || user.email}
                  </a>
                  <ul className={`dropdown-menu ${darkMode ? "dropdown-menu-dark" : ""}`} aria-labelledby="profileDropdown">
                    <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>
                    <li><Link className="dropdown-item" to="/orders">My Orders</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item" onClick={() => dispatch(toggleDarkMode())}>
                        {darkMode ? "Light Mode" : "Dark Mode"}
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Mynavbar;
