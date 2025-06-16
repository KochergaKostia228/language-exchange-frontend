import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {useNavigate} from "react-router-dom";
import {logout, register} from "../store/reducer/action_creators/AuthCreators";

const RegisterPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [acceptPassword, setAcceptPassword] = useState("")
    const [mounted, setMounted] = useState(false);


    const {error,isLoading, isAuth} = useAppSelector(state => state.AuthReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(logout())
    }, []);

    useEffect(() => {
        if (!mounted) {
            setMounted(true);
            return;
        }

        if (!error && !isLoading) {
            navigate('/login');
        }
    }, [error, isLoading]);

    const submitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(register(email, password, fullName, acceptPassword))
    }

    const loginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/login')

    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <form className="w-50 mb-5 card p-5">
                <h1>Registration</h1>
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
                <div className="mb-3">
                    <label className="form-label">Accept password</label>
                    <input value={acceptPassword} onChange={(e) => setAcceptPassword(e.target.value)} type="password"
                           className="form-control" id="formGroupExampleInput2"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text"
                           className="form-control" id="formGroupExampleInput2"/>
                </div>

                <p style={{color: 'red'}}>{error}</p>

                <div className="d-flex justify-content-between" style={{width: "200px"}}>
                    <button className="btn btn-primary" onClick={submitClick}>
                        Submit
                    </button>
                    <button className="btn btn-success" onClick={loginClick}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;