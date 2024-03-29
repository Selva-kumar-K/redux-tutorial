import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../app/features/counter/counterSlice'
const Counter = () => { 

    const count = useSelector((state) => state.count.value)

    const dispatch = useDispatch()
    return(
    <>
    <h1>Count : {count}</h1>
    <button onClick={() => dispatch(increment())} >+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    </>
    )
}

export default Counter