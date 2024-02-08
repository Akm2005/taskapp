import React, { useState } from "react";
import { auth } from "../auth.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.css"; // Make sure to create Register.css for styling
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 

  const handleSubmit = async (e) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Registration done! now you can login.");

      console.log("Registration successful:");

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("try again!");
    }
  };

  return (
    <div className="container">
      <form
        className="form1"
        onSubmit={(e) => {
          e.preventDefault(); // Prevents the default form submission behavior
          handleSubmit();
        }}
      >
        <div className="user">
          <i className="fa fa-user fa-5x" style={{ color: "#80b3ff" }}></i>
        </div>
       
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          required
        />
        <br />

        <button
          className="btn btn-primary"
          type="submit"
        >
          Register
        </button>
        <div className="a"><a href="/">Already have an account? Login here.</a></div>
      </form>
    </div>
  );
};

export default Register;
