import { forwardRef, useImperativeHandle, ref, useRef } from "react"

const ResultModal  = forwardRef(function ResultModal({result, targetTime, timeLeft, onReset}, ref){

    const dialog = useRef()

    const lost = result <= -50 || result >= 50
    const fixedResult = (result < 0 ? (result * -1): result)
    const formattedTime = (fixedResult/1000) .toFixed(2)
    const score = Math.round( 1-result / (targetTime* 1000))

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    
    return <dialog ref={dialog} className="result-modal">
        {lost ? <h2> you Lost </h2>: <h2> you Won!</h2> }
        {lost && <p> your socre {score} </p>}
        <p> The target time was <strong> {targetTime} seconds. </strong></p>
        <p>You have soped the timer with <strong> {formattedTime} seconds {result < 0 ? 'Due.': 'Left.' } </strong></p>
        <form action="" id="someshit" name="some othershit" onSubmit={onReset} >
            <button>close</button>
        </form>

    </dialog>
}) 

export default ResultModal