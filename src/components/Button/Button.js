import React from 'react';
import s from './style.module.scss'

const Button = (props) => {
    return (
        <button className={s.btn}>
            {props.text}
        </button>
    );
};

export default Button;