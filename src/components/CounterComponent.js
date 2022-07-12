import { Button, Input } from '@material-ui/core'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, addCounter } from '../redux-toolkit/features/counter/counterSlice'

function CounterComponent() {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [number, setnumber] = useState(null)
    const handleInput = (e) => setnumber(e.target.value)
  return (
    <div>
        <h2>Counter</h2>
        <p> {counter} </p>
        <Button color='danger' onClick={() => dispatch(increment()) }>+</Button>
        <Button onClick={() => dispatch(decrement()) }>-</Button>
        <Input color='success' type='text' onChange = {handleInput} />
        <Button onClick={() => dispatch(addCounter(number)) }>add { number}</Button>


    </div>
  )
}

export default CounterComponent