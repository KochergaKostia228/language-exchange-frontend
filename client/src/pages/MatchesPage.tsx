import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchMatchesRequests} from "../store/reducer/action_creators/RequestCreators";
import MySpinner from "../components/MySpinner";
import MatchesList from "../components/lists/MatchesList";

const MatchesPage = () => {
    const {isLoading} = useAppSelector(state => state.RequestReducer)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchMatchesRequests())
    }, [])

    return (
        <div className="m-auto w-50 mt-4">
            {
                isLoading
                    ?
                    <MySpinner/>
                    :
                    <div>
                        <h1>Matches Page</h1>
                        <MatchesList/>
                    </div>

            }
        </div>
    );
};

export default MatchesPage;