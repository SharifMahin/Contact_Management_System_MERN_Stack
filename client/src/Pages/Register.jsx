import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import Validation from "../Components/Validation";
import "../assets/css/form.css";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const [errors, seterrors] = useState({});
  const [serverErrors, setserverErrors] = useState({});
  const submitForm = async (event) => {
    event.preventDefault();
    const errs = Validation(values);
    seterrors(errs);
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:3000/api/register", values)
        .then((res) => {
          toast.success("Account Created Succesfully", {
            position: "top-right",
            autoClose: 2000,
          });
        })
        .catch((err) => {});
    }
  };

  return (
    <>
      <Navbar />
      <div className="from-container">
        <form className="form" onSubmit={submitForm}>
          <h2>Create Account</h2>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="name"
              onChange={inputHandler}
            />
            {errors.name && <span className="errors">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              name="email"
              autoComplete="off"
              onChange={inputHandler}
            />
            {errors.email && <span className="errors">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              placeholder="***********"
              className="form-control"
              name="password"
              onChange={inputHandler}
            />
            {errors.password && (
              <span className="errors">{errors.password}</span>
            )}
          </div>
          <button className="form-btn">Register</button>
          <p>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
