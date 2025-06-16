import React, {FC} from 'react';
import {IRequest} from "../../models/IRequest";
import {format} from "date-fns";

type RequestProps = {
    request: IRequest
};

const OutgoingCard: FC<RequestProps> = ({request}) => {
    return (
        <div className="card mt-4">
            <h5 className="card-header">User</h5>
            <div className="card-body d-flex justify-content-between">
                <div>
                    <h5 className="card-title">Full name: {request.partner.full_name}</h5>
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

export default OutgoingCard;