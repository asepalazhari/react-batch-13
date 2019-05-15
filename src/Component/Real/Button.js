import React from 'react';

export const Button = ({ buttonName, lempar }) => {
    return (
        <button
            type="button"
            className="btn btn-secondary rounded-0"
            style={{ width: "125px" }}
            onClick={lempar}
        >
        {buttonName}
        </button>
    );
}