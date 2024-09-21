import { useState, useRef } from "react"
import ResultModal from "./ResultModal"

function TimerChallenge({title, targetTime}){
    const timer = useRef()
    const dilog = useRef()

    const [remaingTime, setRemaingTime] = useState(targetTime * 1000);

    const timeIsActive = -100 < remaingTime &&  remaingTime < targetTime * 1000;

    if (remaingTime <= -100){
        clearInterval(timer.current)
        dilog.current.open()
    }

    function handleStart(){
        timer.current = setInterval( () => { setRemaingTime( prevTime => prevTime -10 )},  10);
    }

    function stopTimer(){
        clearInterval(timer.current)
        dilog.current.open()
    }

    function handleReset(){
        setRemaingTime(targetTime * 1000)
    }

    return <>
    <ResultModal ref={dilog} targetTime= {targetTime} result={remaingTime} onReset={handleReset} />
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{targetTime}{ targetTime > 1 && 's' }</p>
        <button onClick={ timeIsActive ? stopTimer: handleStart }>
            { timeIsActive ? 'stop' :'start' } challange
        </button>
        <p className={ timeIsActive ? 'active': null}>
            { timeIsActive ? 'time is running': 'time is innactive' }
        </p>
    </section>
    </> 
}
export default TimerChallenge