import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {createRequest} from "../../store/reducer/action_creators/RequestCreators";
import {filterUser} from "../../store/reducer/action_creators/UserCreators";

type UserProps = {
    user: IUser,

};

const UserCard:FC<UserProps> = ({user}) => {
    const {allUsers} = useAppSelector(state => state.UserReducer)
    const dispatch = useAppDispatch()

    const send = () => {
        dispatch(createRequest(user.id))
        dispatch(filterUser(allUsers.filter(u => u.id !== user.id)))
    }

    return (
        <div className="card mt-4">
            <h5 className="card-header">User</h5>
            <div className="card-body d-flex justify-content-between">
                <div>
                    <h5 className="card-title">Email: {user.email}</h5>
                    <h5 className="card-title">Full name: {user.full_name}</h5>
                    <div className="d-flex">
                        <button onClick={send} className="btn btn-success">Send request</button>
                    </div>
                </div>

                <div>
                    {
                        user?.languages?.length > 0
                            ?
                            user.languages.map((item) =>
                                <p className='card-text' key={item.id}>{item.name}: {item.type}</p>
                            )
                            :
                            <h5>You have not chosen a language yet</h5>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserCard;