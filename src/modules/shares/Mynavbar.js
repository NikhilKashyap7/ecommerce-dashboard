import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Mynavbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery(""); // Clear input after search
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} 
      ${!darkMode ? "navbar-light-bottom-shadow" : ""} shadow-sm`}
    >
      <div className="container">
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
              <a className="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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

          {/* 🔹 Working Search Bar */}
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input 
              className={`form-control me-2 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`} 
              type="search" 
              placeholder="Search products..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`} type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/mycart">
                <FaShoppingCart />
                {cartItems.length > 0 && <span className="badge bg-danger">{cartItems.length}</span>}
              </Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown">
                Profile
              </a>
              <ul className={`dropdown-menu ${darkMode ? "dropdown-menu-dark" : ""}`} aria-labelledby="profileDropdown">
                <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>
                <li><Link className="dropdown-item" to="/orders">My Orders</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item" onClick={toggleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Mynavbar;
