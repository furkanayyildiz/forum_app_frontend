import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("_id");
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  const goThread = () => {
    if (localStorage.getItem("_id")) {
      navigate("/threads");
    } else {
      navigate("/login");
    }
  };
  return (
    <nav className="navbar">
      <Link to="/" className="sitetitle">
        Agalar
      </Link>
      <div className="navbarRight">
        <button onClick={goThread}>Create Thread</button>
        {localStorage.getItem("_id") ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
