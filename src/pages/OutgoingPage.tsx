import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchOutgoingRequests} from "../store/reducer/action_creators/RequestCreators";
import MySpinner from "../components/MySpinner";
import OutgoingList from "../components/lists/OutgoingList";

const OutgoingPage = () => {
    const {isLoading} = useAppSelector(state => state.RequestReducer)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchOutgoingRequests())
    }, [])

    return (
        <div className="m-auto w-50 mt-4">
            {
                isLoading
                    ?
                    <MySpinner/>
                    :
                    <div>
                        <h1>Outgoing Page</h1>
                        <OutgoingList/>
                    </div>

            }
        </div>
    );
};

export default OutgoingPage;