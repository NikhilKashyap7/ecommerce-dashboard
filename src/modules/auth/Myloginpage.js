import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/logo.png';

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import Mynavbar from "../shares/Mynavbar";
import { Link, useNavigate } from "react-router-dom";

const Myloginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    generateCaptcha();
    const interval = setInterval(generateCaptcha, 30000);
    return () => clearInterval(interval);
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor((Math.random() + 1) * 49);
    const b = Math.floor(Math.random() * 41);
    let Charc = a > 90 ? "A" : a >= 80 ? "B" : a >= 70 ? "C" : "E";
    let sCharc =
      b > 40 ? "@" : b >= 32 ? "#" : b >= 24 ? "$" : b >= 18 ? "%" : b >= 12 ? "&" : "!";

    let captchaText =
      a > 82
        ? `${a}${Charc}${b}${sCharc}`
        : a >= 60
          ? `${sCharc}${Charc}${a}${b}`
          : a >= 50
            ? `${b}${sCharc}${a}${Charc}`
            : a >= 40
              ? `${b}${sCharc}${a}${Charc}`
              : `${b}${a}${Charc}`;

    setCaptcha(captchaText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptcha !== captcha) {
      alert("Incorrect CAPTCHA, please try again.");
      setUserCaptcha("");
      generateCaptcha();
      return;
    }

    console.log("Email:", email, "Password:", password);
    navigate("/");
  };

  return (
    <>
      <Mynavbar />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
          <div className='col-md-12 text-center'>
            <div className='mb-3'>
              <img src={logo} alt='company logo' className='logo img-fluid' style={{ minWidth: "150px" }} />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary input-group-text"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">CAPTCHA</label>
              <span className="form-control text-center bg-light">{captcha}</span>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter CAPTCHA"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn "
                onClick={generateCaptcha}
              >
                <FaArrowsRotate />
              </button>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">
              Login
            </button>
          </form>
          <div className="mt-2 justify-content-center d-flex">
            <p>Don't Have an account <Link to="/register" className="text-primary">Register</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myloginpage;
