import React from "react";
import "../Components/Styles/ChangePassword.css";
function ChangePassword() {
  return (
    <div className="changepasword-screen">
      <div className="changepasword-container">
        <div className="lock-icon">
          <img src="lock-icon.png" alt="Lock Icon" />
        </div>
        <div className="password-fields">
          <input type="password" placeholder="Old Password" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <div className="button">
        <span className="edit-stops">Confirm</span>
      </div>
    </div>
  );
}

export default ChangePassword;
