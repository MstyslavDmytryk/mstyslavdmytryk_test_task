import React from "react";
import "./GoogleLogin.css";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

const GoogleLogin = ({ onLogin }) => {
  const handleLogin = ({ data }) => {
    const loginData = JSON.stringify({ firstName: data.given_name, lastName: data.family_name });
    localStorage.setItem("credentials", loginData);
    onLogin(loginData);
  };

  const handleLoginFailure = (err) => {
    console.log(err);
  };

  return (
    <LoginSocialGoogle
      className="google-login"
      client_id={"668477022117-t0jugb20lnvvdeqg3ce0fkfmeqe6af9t.apps.googleusercontent.com"}
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      onResolve={handleLogin}
      onReject={handleLoginFailure}>
      <GoogleLoginButton />
    </LoginSocialGoogle>
  );
};

export default GoogleLogin;
