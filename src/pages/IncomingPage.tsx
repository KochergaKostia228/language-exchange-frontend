import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import MySpinner from "../components/MySpinner";
import {fetchIncomingRequests} from "../store/reducer/action_creators/RequestCreators";
import IncomingList from "../components/lists/IncomingList";

const IncomingPage = () => {
    const {isLoading} = useAppSelector(state => state.RequestReducer)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchIncomingRequests())
    }, [])

    return (
        <div className="m-auto w-50 mt-4">
            {
                isLoading
                    ?
                    <MySpinner/>
                    :
                    <div>
                        <h1>Incoming Page</h1>
                        <IncomingList/>
                    </div>

            }
        </div>
    );
};

export default IncomingPage;