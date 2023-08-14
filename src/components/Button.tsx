import React from 'react';


export type ButtonType = {
    title: string
    callback: () => void
}
export const Button = ({title, callback}: ButtonType) => {

    const addTaskHandler = () => {
        callback()
    }
    return (
        <button onClick={addTaskHandler}>
            {title}
        </button>
    );
};

