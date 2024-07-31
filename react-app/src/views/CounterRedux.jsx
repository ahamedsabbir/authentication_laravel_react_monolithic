import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactDOM from 'react-dom'
import { numDecrement, numIncrement, numStatic, numReset } from '../reducers/reduxCounter';

function CounterRedux() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch();
  const handelIncrement = () => {
    dispatch(numIncrement())
  }
  const handelDecrement = () => {
    dispatch(numDecrement())
  }
  const handelStatic = (value) => {
    dispatch(numStatic(value))
  }
  const handelReset = () => {
    dispatch(numReset())
  }
  return (
    <>
      <div className='container mt-5'>
        <div className="card" style={{ width: '500px' }}>
          <div className="card-body">
            <h5 className="card-title"><i>count is {count}</i></h5>
            <div>
              <input type='number' value={count} className="form-contrl" onChange={(e) => handelStatic(e.target.value)}/>
            </div>
            <button className="btn" onClick={handelIncrement}>Increment</button>
            <button className="btn" onClick={handelDecrement}>Decrement</button>
            <button className="btn" onClick={handelReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CounterRedux