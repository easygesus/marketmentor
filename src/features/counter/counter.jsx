import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterSlice"

export const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="counter">
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <span>{count}</span>
      </div>
    </div>
  )
}
