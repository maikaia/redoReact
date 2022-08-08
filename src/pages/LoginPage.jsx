import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function renderInput(type, value, setValue, placeholder, css) {
    return (
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={css}
      />
    );
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payload = { email, password };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        localStorage.setItem("webb21-redo", token);
        navigate("/home");
      });
  }

  return (
    <PrivateRoute>
      <div className="container">
        <div className="login App">
          <h1>Sign In</h1>
          <form onSubmit={handleOnSubmit}>
            <p className="loginLabels">E-mail</p>
            {renderInput("text", email, setEmail, "Email", "input")}
            <p className="loginLabels">Password</p>
            {renderInput(
              "password",
              password,
              setPassword,
              "Password",
              "input"
            )}
            <br />
            <button type="submit" className="signInButton">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </PrivateRoute>
  );
}
