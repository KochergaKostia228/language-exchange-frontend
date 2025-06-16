import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {logout} from "../store/reducer/action_creators/AuthCreators";

const NavBar = () => {
    const {isAuth} = useAppSelector(state => state.AuthReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const exit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/login')
    }

    return (
        <nav className="navbar bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <nav className="nav">
                    <button className="nav-link text-white" onClick={() => navigate('/profile')}>Profile</button>
                    <button className="nav-link text-white" onClick={() => navigate('/users')}>User list</button>
                    <button className="nav-link text-white" onClick={() => navigate('/requests/incoming')}>Incoming
                        requests
                    </button>
                    <button className="nav-link text-white" onClick={() => navigate('/requests/outgoing')}>Outgoing
                        requests
                    </button>
                    <button className="nav-link text-white" onClick={() => navigate('/matches')}>
                        Matches list
                    </button>
                    {
                        isAuth && <button className="nav-link text-white" onClick={exit}>Exit</button>
                    }
                </nav>
            </div>
        </nav>
    );
};

export default NavBar;