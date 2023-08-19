import React from 'react';


export type ButtonType = {
    title: string
    callback: () => void
    className?: string
}
export const Button = ({title, callback, className}: ButtonType) => {

    const onClickHandler = () => {
        callback()
    }
    return (
        <button onClick={onClickHandler} className={className}>
            {title}
        </button>
    );
};

