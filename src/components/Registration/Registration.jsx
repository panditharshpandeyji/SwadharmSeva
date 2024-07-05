import React from "react";
import "./style.css";
function Registration() {
  return (
    <div className="container flexWithCol">
      <div className="large-heading flexOnly">
        <h1>Create Your Account</h1>
      </div>
      <div className="small-heading flexOnly">
        <span>Enter your full name and password.</span>
      </div>
      <div className="input-section">
        <input type="text" placeholder="First Name" />
        <span className="displayNone">Please enter your first name</span>
        <input type="text" placeholder="Last Name" />
        <span className="displayNone">Please enter your last name</span>
        <input type="password" placeholder="Password" />
        <span className="displayNone">Please enter password</span>
      </div>
      <div className="term-condition">
        <p>
          <input type="checkbox" className="term-input" />
          <b>For Education:</b> Check here Lorem maiores this is numquam ad
          expedita vel blanditiis officiis sequi,tenetur repellat in mollitia.
          Veritatis adipisci quos!
        </p>
      </div>
      <div className="button-section">
        <button>Continue</button>
      </div>
    </div>
  );
}

export default Registration;
