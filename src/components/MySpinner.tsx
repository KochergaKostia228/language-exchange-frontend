import React from 'react';

const MySpinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Загрузка...</span>
            </div>
        </div>
    );
};

export default MySpinner;