import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import OutgoingCard from "../cards/OutgoingCard";

const IncomingList = () => {
    const {requests} = useAppSelector(state => state.RequestReducer)

    return (
        <div>
            {requests.length > 0
                ?
                requests.map((item) =>
                    <OutgoingCard key={item.id} request={item}/>
                )
                :
                <h2 className='d-flex justify-content-center mt-5'>No request found</h2>
            }
        </div>
    );
};


export default IncomingList;