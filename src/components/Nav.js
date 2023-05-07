import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem("_id");
        navigate("/");
    };
    const goThread = () => {
        navigate("/threads");
    };
    return (
        <nav className='navbar'>
            <h2>Threadify</h2>
            <div className='navbarRight'>
                <button onClick={goThread}>Create Thread</button>
                <button onClick={signOut}>Sign out</button>
            </div>
        </nav>
    );
};

export default Nav;