import s from './style.module.scss'
import {useEffect, useState} from "react";

const TimerWrapper = () => {

    const deadline = "2023-07-30T17:02:59"
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(null);
    // const [startTimerDate, setStartTimerDate] = useState(Date.now());
    // const [deadlineDate, setDeadlineDate] = useState(startTimerDate + (hours * 60 * 60 + minutes * 60 + seconds) * 1000);
    const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());

    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: "Время закончилось!",
    });


    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimespan((_timespan) => _timespan - 1000);
                setHours(Math.floor((timespan / (60 * 60 * 1000)) % 24))
                setMinutes(Math.floor((timespan / (60 * 1000)) % 60))
                setSeconds(Math.floor((timespan / 1000) % 60))

                /*  if (seconds > 0) {
                      setSeconds((seconds) => seconds - 1);
                  } else if (minutes > 0) {
                      setMinutes((minutes) => minutes - 1);
                      setSeconds(59);
                  } else if (hours > 0) {
                      setHours((hours) => hours - 1);
                      setMinutes(59);
                      setSeconds(59);
                  }*/
            }, 1000);
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
            setShowEndScreen({...showEndScreen, show: true});
            resetTimer();
        }
        return () => clearInterval(interval);
    }, [seconds, minutes, hours, isRunning, showEndScreen.show]);

    useEffect(() => {
        setTimespan(new Date(deadline) - Date.now());
    }, [deadline]);

    function startTimer() {
        if (hours !== 0 || minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
            setShowEndScreen({...showEndScreen, show: false});
        } else {
            window.alert("Добавьте время");
        }
    }

    // Pause
    function pauseTimer() {
        setIsRunning(false);
    }

    // Stop

    function stopTimer() {
        resetTimer();
        setShowEndScreen({...showEndScreen, show: false});
    }

    function resetTimer() {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    return (
        <div>
            {showEndScreen.show && (
                <h1 className="title  text-light">{showEndScreen.message}</h1>
            )}
            <input disabled={isRunning} type={"number"} value={hours} onChange={e => setHours(e.target.value)}/>
            <input disabled={isRunning} type={"number"} value={minutes} onChange={e => setMinutes(e.target.value)}/>
            <input disabled={isRunning} type={"number"} value={seconds} onChange={e => setSeconds(e.target.value)}/>
            <br/>
            {!isRunning && (
                <button onClick={startTimer}>
                    Старт
                </button>
            )}
            {isRunning && (
                <button onClick={pauseTimer}>
                    Пауза
                </button>
            )}{" "}
            <button onClick={stopTimer}>
                Стоп
            </button>
        </div>
    );
};

export default TimerWrapper;