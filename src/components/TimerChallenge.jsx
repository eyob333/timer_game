

function TimerChallenge({title, targetTime}){

    return <section className="challange">
        <h1>{title}</h1>
        <p className="challange-timer">{targetTime} { targetTime > 1 & 's' }</p>
        <button>
            start challange
        </button>
        <p className="">
            time is running / time is innactive
        </p>
    </section>
}

export default TimerChallenge