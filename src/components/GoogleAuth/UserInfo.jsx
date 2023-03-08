import React from "react";
import "./UserInfo.css";

const UserInfo = ({ firstName, lastName, onLogout }) => {
  return (
    <div className="user-info">
      <span className="user-name">
        Hello {firstName} {lastName}
      </span>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserInfo;
