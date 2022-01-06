
import { Button } from 'react-bootstrap'
import { CounterProvider, useCounter, actionTypes } from '../contexts/CounterContext'

function Counter () {
  return (
    <div>
      <CounterProvider>
        <CounterValue />
        <CounterActions />
      </CounterProvider>
    </div>
  )
}

function CounterValue () {
  const { state } = useCounter()
  return (
    <h1>Valeur du compteur : {state.counter}</h1>
  )
}

function CounterActions () {
  const { dispatch } = useCounter()
  return (
    <div>
      <Button as='input' type='button' value='-' onClick={() => dispatch({ type: actionTypes.DECREMENT })} />{' '}
      <Button as='input' type='button' value='+' onClick={() => dispatch({ type: actionTypes.INCREMENT })} />{' '}
    </div>
  )
}

export default Counter
