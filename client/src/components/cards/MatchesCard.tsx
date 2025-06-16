import React, {FC} from 'react';
import {format} from "date-fns";
import {IRequest} from "../../models/IRequest";

type RequestProps = {
    request: IRequest
};

const MatchesCard: FC<RequestProps> = ({request}) => {
    return (
        <div className="card mt-4">
            <h5 className="card-header">My Partner</h5>
            <div className="card-body d-flex justify-content-between">
                <div>
                    <h5 className="card-title">Full name: {request.partner.full_name}</h5>
                </div>

                <div>
                    <h5>Matched at: {format(request.date, 'dd.MM.yyyy')}</h5>
                </div>
            </div>
        </div>
    );
};

export default MatchesCard;