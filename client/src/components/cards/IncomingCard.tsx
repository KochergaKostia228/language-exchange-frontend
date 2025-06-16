import React, {FC} from 'react';
import {IRequest} from "../../models/IRequest";
import {format} from "date-fns";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {acceptRequest, declineRequests, filterRequests} from "../../store/reducer/action_creators/RequestCreators";

type RequestProps = {
    request: IRequest
};

const IncomingCard: FC<RequestProps> = ({request}) => {
    const {requests} = useAppSelector(state => state.RequestReducer)
    const dispatch = useAppDispatch()

    const accept = () => {
        dispatch(acceptRequest(request.id))
        dispatch(filterRequests(requests.filter(r => r.id !==request.id)))
    }

    const decline = () => {
        dispatch(declineRequests(request.id))
        dispatch(filterRequests(requests.filter(r => r.id !==request.id)))
    }

    return (
        <div className="card mt-4">
            <h5 className="card-header">User</h5>
            <div className="card-body d-flex justify-content-between">
                <div>
                    <h5 className="card-title">Full name: {request.partner.full_name}</h5>
                    {
                        request.status === "pending"
                        &&
                        <div className="d-flex">
                            <button onClick={accept} className="btn btn-success">Accept</button>
                            <button onClick={decline} className="btn btn-danger mx-2">Decline</button>
                        </div>
                    }
                    {
                        request.status === "accepted" && <span className="badge bg-success text-white">Accept</span>
                    }
                    {
                        request.status === "declined" && <span className="badge bg-danger text-white">Decline</span>
                    }
                </div>

                <div>
                    <h5>Date: {format(request.date, 'dd.MM.yyyy')}</h5>
                </div>
            </div>
        </div>
    );
};

export default IncomingCard;