import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getLanguages} from "../store/reducer/action_creators/LanguageCreators";
import {getAllUsers} from "../store/reducer/action_creators/UserCreators";

const SearchUserForm = () => {
    const {languages} = useAppSelector(state => state.LanguageReducer)
    const dispatch = useAppDispatch()
    const [targetId, setTargetId] = useState("")
    const [nativeId, setNativeId] = useState("")

    useEffect(() => {
        dispatch(getLanguages())
    }, []);

    const search = () => {
        if(targetId && nativeId){
            dispatch(getAllUsers(Number(targetId), Number(nativeId)))
        }
        else{
            dispatch(getAllUsers())
        }
    }

    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between w-25">
                <h4>Target:</h4>
                <select value={targetId} onChange={(e) => setTargetId(e.target.value)}>
                    <option value="">Default</option>
                    {languages.map((language) =>
                        <option key={language.id} value={language.id}>{language.name}</option>
                    )}
                </select>
            </div>
            <div className="d-flex justify-content-between w-25">
            <h4>Native:</h4>
                <select value={nativeId} onChange={(e) => setNativeId(e.target.value)}>
                    <option value="">Default</option>
                    {languages.map((language) =>
                        <option key={language.id + 10} value={language.id}>{language.name}</option>
                    )}
                </select>
            </div>

            <button onClick={search} className="btn btn-success">Search</button>
        </div>
    );
};

export default SearchUserForm;