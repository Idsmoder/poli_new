import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";
import {decrement, increment} from "./counterSlice.js";

const  Counter =  ()  =>  {
    const count =  useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <Button onClick={()=>dispatch(increment())} >+</Button>
            <h1>{count}</h1>
            <Button onClick={()=>dispatch(decrement())} >-</Button>
        </div>
    )
}
export default Counter;