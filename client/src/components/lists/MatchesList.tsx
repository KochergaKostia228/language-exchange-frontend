import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import MatchesCard from "../cards/MatchesCard";

const MatchesList = () => {
    const {requests} = useAppSelector(state => state.RequestReducer)

    return (
        <div>
            {requests.length > 0
                ?
                requests.map((item) =>
                    <MatchesCard key={item.id} request={item}/>
                )
                :
                <h2 className='d-flex justify-content-center mt-5'>No matches found</h2>
            }
        </div>
    );
};

export default MatchesList;