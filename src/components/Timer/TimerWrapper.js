import s from './style.module.scss'
import {useEffect, useState} from "react";
import useTimer from "./Timer";

const TimerWrapper = () => {

    const {hours, minutes, seconds} = useTimer("2023-07-31T11:59:19");

    return (
        <div>

            <button onClick={()=>{}}>btn</button>
            <div>
                {hours}:
                {minutes}:
                {seconds}
            </div>
        </div>
    );
};

export default TimerWrapper;