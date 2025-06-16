import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {useAppSelector} from "../hooks/redux";

const AppRouter = () => {
   const {isAuth} = useAppSelector(state => state.AuthReducer)

    return (
        <Routes>
            {
                isAuth
                    &&
                authRoutes.map(({path, Component})=>
                    <Route key={path} path={path} Component={Component}/>
                )

            }
            {
                publicRoutes.map(({path, Component})=>
                    <Route key={path} path={path} Component={Component}/>
                )
            }
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default AppRouter;