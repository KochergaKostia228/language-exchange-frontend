import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import UserList from "../components/lists/UserList";
import SearchUserForm from "../components/SearchUserForm";
import MySpinner from "../components/MySpinner";
import {getAllUsers} from "../store/reducer/action_creators/UserCreators";

const UsersPage = () => {
    const {isLoading} = useAppSelector(state => state.UserReducer)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getAllUsers())
    }, [])

    return (
        <div className="m-auto w-50 mt-4">
            {
                isLoading
                    ?
                    <MySpinner/>
                    :
                    <div>
                        <SearchUserForm/>
                        <UserList/>
                    </div>

            }
        </div>
    );
};

export default UsersPage;