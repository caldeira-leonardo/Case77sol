import React from 'react';
import './Loading.scss';

const Loading = () => {
    return (
        <div className="lds-ring" data-testid="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loading;
