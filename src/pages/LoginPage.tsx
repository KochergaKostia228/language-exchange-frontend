import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {useNavigate} from "react-router-dom";
import {login, logout} from "../store/reducer/action_creators/AuthCreators";

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {error, isAuth} = useAppSelector(state => state.AuthReducer)
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(logout())
        console.log(isAuth)
    }, []);

    useEffect(() => {
        if (!mounted) {
            setMounted(true);
            return;
        }

        if(isAuth){
            navigate('/profile')
        }
    }, [isAuth]);

    const submitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    const registrationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/register')

    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <form className="w-50 mb-5 card p-5">
                <h1>Login</h1>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control"
                           id="formGroupExampleInput"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                           className="form-control" id="formGroupExampleInput2"/>
                </div>

                <p style={{color: 'red'}}>{error}</p>

                <div className="d-flex justify-content-between" style={{width: "200px"}}>
                    <button className="btn btn-primary" onClick={submitClick}>
                        Submit
                    </button>
                    <button className="btn btn-success" onClick={registrationClick}>
                        Registration
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;