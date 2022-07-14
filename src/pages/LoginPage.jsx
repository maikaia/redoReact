import React from "react";

export default function LoginPage() {
  return (
    <div class="container">
      <div class="login App">
        <h1>Sign In</h1>
        <form>
          <label>
            <p class="loginLabels">E-mail</p>
            <input class="input" placeholder="E-mail" type="text" />
          </label>
          <label>
            <p class="loginLabels">Password</p>
            <input class="input" placeholder="Password" type="password" />
          </label>
          <br />
          <button class="signInButton">Sign In</button>
        </form>
      </div>
    </div>
  );
}
