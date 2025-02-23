import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductModal from "./ViewDetails";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import Loader from "./Loader";

function Apidata() {
  const [card, updateCard] = useState([]);
  const [df, setDf] = useState("");
  const [x, setX] = useState([]);
  const [filterData, setFilter] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    setLoading(true); 
    axios.get("https://dummyjson.com/products").then((d) => {
      updateCard(d.data.products);
      setLoading(false); 
    });
  }, []);

  const searchByfunc = (e) => {
    const t = e.target.value;
    setDf(t);
    setFilter([]);

    if (t === "rating") {
      setX([...new Set(card.map((d) => Math.ceil(d[t])))]);
    } else {
      setX([...new Set(card.map((d) => d[t]))]);
    }
  };

  const myfilter = (e) => {
    const a = e.target.value;
    const filtered = card.filter((d) => {
      return df === "rating" ? Math.ceil(d[df]) == a : String(d[df]) === a;
    });
    setFilter(filtered);
  };

  const clearFilters = () => {
    setDf("");
    setFilter([]);
    setX([]);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className={`container-fluid ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`} style={{ marginTop: "80px" }}>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
          <Loader />
        </div>
      ) : (
        <>
          {/* Filter Section */}
          <div className="row justify-content-center">
            <div className="col-md-12 g-0">
              <div className={`card shadow-sm p-3 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"} border-0`}>
                <div className="row">
                  <div className="col-md-2">
                    <label className="fw-bold">Search By</label>
                    <select className="form-select" onChange={searchByfunc} value={df}>
                      <option hidden>Select Option</option>
                      <option value="id">ID</option>
                      <option value="price">Price</option>
                      <option value="category">Category</option>
                      <option value="brand">Brand</option>
                      <option value="rating">Rating</option>
                      <option value="stock">Stock</option>
                    </select>
                  </div>

                  <div className="col-md-2">
                    <label className="fw-bold">Filter By</label>
                    <select className="form-select" onChange={myfilter} disabled={!df}>
                      <option hidden>Select Option</option>
                      {x.map((d, i) => (
                        <option key={i}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-2 d-flex align-items-end">
                    {filterData.length > 0 && (
                      <button className="btn btn-danger w-100" onClick={clearFilters}>
                        Clear All
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="row mt-4">
            {(filterData.length > 0 ? filterData : card).map((d) => (
              <div className="col-md-4 col-lg-3 mb-3" key={d.id}>
                <div className={`card shadow-sm border-0 rounded ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
                  {d.images && d.images.length > 0 ? (
                    <img
                      src={d.images[0]}
                      alt="Product"
                      className="card-img-top product-img"
                    />
                  ) : (
                    <div
                      style={{
                        height: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: darkMode ? "#343a40" : "#f8f9fa",
                      }}
                    >
                      <p className="text-muted">No Image</p>
                    </div>
                  )}

                  <div className="card-body">
                    <h5 className="card-title text-truncate">{d.title}</h5>
                    <p className="text-muted mb-1">
                      Brand: <strong>{d.brand}</strong>
                    </p>
                    <p className="fw-bold text-danger mb-1">Price: ${d.price}</p>
                    <p className="text-success">
                      Rating: <FaStar className="rating" /> {d.rating}
                    </p>
                    <button className="btn btn-primary w-100" onClick={() => openModal(d)}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showModal && <ProductModal show={showModal} handleClose={closeModal} product={selectedProduct} />}
        </>
      )}
    </div>
  );
}

export default Apidata;
