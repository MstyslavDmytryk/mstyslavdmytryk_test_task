import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import CardList from "../components/CardList/CardList";
import GoogleLogin from "../components/GoogleAuth/GoogleLogin";
import UserInfo from "../components/GoogleAuth/UserInfo";

const MainPage = ({ cards, onFilterChange }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedCredentials = localStorage.getItem("credentials");
    if (storedCredentials) {
      setUser(JSON.parse(storedCredentials));
    }
  }, []);

  const handleLogin = (credentials) => {
    setUser(JSON.parse(credentials));
  };

  const handleLogout = () => {
    localStorage.removeItem("credentials");
    setUser(null);
  };

  return (
    <>
      <Header />
      {!user ? <GoogleLogin onLogin={handleLogin} /> : <UserInfo firstName={user.firstName} lastName={user.lastName} onLogout={handleLogout} />}
      <Filter onFilterChange={onFilterChange} />
      <CardList cards={cards} />
    </>
  );
};

export default MainPage;
