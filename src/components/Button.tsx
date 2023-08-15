import React from 'react';


export type ButtonType = {
    title: string
    callback: () => void
}
export const Button = ({title, callback}: ButtonType) => {

    const onClickHandler = () => {
        callback()
    }
    return (
        <button onClick={onClickHandler}>
            {title}
        </button>
    );
};

