import React, { useState } from 'react';
import Mynavbar from '../shares/Mynavbar';
import logo from '../images/logo.png';
import { MdEmail, MdDateRange, MdLock } from "react-icons/md";
import { FaPhone, FaEye, FaEyeSlash } from "react-icons/fa";
import { CgBoy, CgGirl } from "react-icons/cg";
import { FaTransgender } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Myregistorpage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <>
            <Mynavbar />
            <div className='container ' style={{ marginTop: "100px" }}>
                <div className='row justify-content-center'>
                    <div className='col-md-6 col-sm-12 p-3 rounded shadow'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-12 text-center'>
                                    <div className='mb-3'>
                                        <img src={logo} alt='company logo' className='logo img-fluid' style={{ minWidth: "200px" }} />
                                    </div>
                                </div>

                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label"><MdEmail /> Email address</label>
                                        <input type="email" placeholder="eg:yourname@gmail.com" className="form-control " name='email' />
                                    </div>
                                </div>

                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" placeholder="Your Name" className="form-control r-input" name='fullname' />
                                    </div>
                                </div>

                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label"><FaPhone /> Phone No.</label>
                                        <input type="text" placeholder="1234567890" className="form-control r-input" name='phone' />
                                    </div>
                                </div>

                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label">Gender</label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" value="Male" />
                                            <label className="form-check-label"><CgBoy /> Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" value="Female" />
                                            <label className="form-check-label"><CgGirl /> Female</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" value="Others" />
                                            <label className="form-check-label"><FaTransgender /> Others</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label"><MdDateRange /> DOB</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>

                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label r-label">Select Your Interest</label>
                                        <select className='form-select r-input' name='course' >
                                            <option>Beauty</option>
                                            <option>Fragrances</option>
                                            <option>Furniture</option>
                                            <option>Groceries</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3 position-relative">
                                        <label className="form-label"><MdLock /> Password</label>
                                        <div className="input-group">
                                            <input type={showPassword ? "text" : "password"}
                                                className="form-control r-input"
                                                name="password" />
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() => setShowPassword(!showPassword)} >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label "><MdLock /> Confirm Password</label>
                                        <div className="input-group">

                                            <input type={showConfirmPassword ? "text" : "password"} className="form-control " />
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)} >
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12 text-center'>
                                    <div className="mb-3 ">
                                        <Link to="/myregistorpage" type="submit" className='btn btn-success ' >Register Now</Link>
                                    </div>
                                    <p style={{ color: 'blue', textDecoration: 'underline' }}>Already Have an account</p>
                                </div>
                                <div className="mt-2 justify-content-center d-flex">
                                    <p>Already Have an account
                                        <Link to="/login" className="text-primary" style={{ color: 'blue', textDecoration: 'underline' }}> Login</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Myregistorpage;
