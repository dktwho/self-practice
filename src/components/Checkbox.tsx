import React, {ChangeEvent} from 'react';


export type CheckBoxType = {
    callBack: (newIsDone: boolean) => void
    checked: boolean
}
export const Checkbox = (props: CheckBoxType) => {

    const checkBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked)
    }
    return (
        <input
            type="checkbox"
            checked={props.checked}
            onChange={checkBoxHandler}/>
    );
};

