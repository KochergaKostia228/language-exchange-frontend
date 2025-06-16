import React from 'react';
import UserCard from "../cards/UserCard";
import {useAppSelector} from "../../hooks/redux";

const UserList = () => {
    const {allUsers} = useAppSelector(state => state.UserReducer)

    return (
        <div>
            {allUsers.length > 0
                ?
                allUsers.map((item) =>
                    <UserCard key={item.id} user={item}/>
                )
                :
                <h1>No users found</h1>
            }
        </div>
    );
};

export default UserList;