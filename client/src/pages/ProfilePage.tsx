import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import MyModal from "../components/MyModal";
import LanguageForm from "../components/LanguageForm";
import MySpinner from "../components/MySpinner";
import {myProfile} from "../store/reducer/action_creators/UserCreators";

const ProfilePage = () => {
    const {user, error, isLoading} = useAppSelector(state => state.UserReducer)
    const dispatch = useAppDispatch()
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        dispatch(myProfile())
    }, [])

    return (
        <>
            {isLoading
            ?
                <MySpinner/>
            :
                <div>
                    <div className="card m-auto w-50">
                        <h5 className="card-header">Profile</h5>
                        <div className="card-body d-flex justify-content-between">
                            <div>
                                <h5 className="card-title">Email: {user.email}</h5>
                                <h5 className="card-title">Full name: {user.full_name}</h5>
                                <button className='btn btn-success' onClick={() => setModal(true)}>Edit language
                                </button>
                            </div>

                            <div>
                                {
                                    user.languages.length > 0
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
                    <MyModal visible={modal} setVisible={setModal}>
                        <LanguageForm/>
                    </MyModal>
                </div>
            }
        </>
    );
};

export default ProfilePage;