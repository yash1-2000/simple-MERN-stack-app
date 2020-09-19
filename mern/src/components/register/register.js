import React, { useState } from "react";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [UserDetails, setUserDetails] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });

  function FormValue(e) {
    setUserDetails({
      ...UserDetails,
      [e.target.name]: e.target.value,
    });
  }

  async function register(e) {
    e.preventDefault();

    const body = JSON.stringify({
      userName: UserDetails.userName,
      userEmail: UserDetails.userEmail,
    });

    const response = await axios.post("/api/register", body, {
      headers: {
        "content-type": "application/json",
      },
    });
    setUserDetails({
      ...UserDetails,
      message: response.data.message,
    });
    console.log(response);
  }

  return (
    <div className="register">
      <div className="container">
        <div className="heading">REGISTER</div>
        <div className="feilds">
          <form onSubmit={register}>
            <label>NAME: </label>
            <input
              required
              type="text"
              id="userName"
              name="userName"
              onChange={FormValue}
            />
            <br />
            <br />
            <label> EMAIL: </label>
            <input
              required
              type="email"
              id="userEmail"
              name="userEmail"
              onChange={FormValue}
            />
            <br />
            <br />
            <button type="submit">REGISTER</button>
            {UserDetails.message ? <h1 className="message">{UserDetails.message}</h1> : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
