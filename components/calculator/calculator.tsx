import { useState } from 'react';
import { pipe } from 'ramda'
import CalcButtonGroup from './calcButtonGroup';
// move to model and make alias for string or specific strings type for calc
const operators = ['+', '-', '*', '/']
// make recursive?
const getLastNumberStr = (calcValue: string) => {
  let i = calcValue.length
  let str = ''
  while (i--) {
    if (operators.indexOf(calcValue[i]) > -1) {
      break
    } else {
      str += calcValue[i]
    }
  }
  return str
}
const getLastChar = (calcValue: string) => calcValue[calcValue.length - 1]
const charIsOperator = (char: string) => operators.indexOf(char) > -1
const lastCharIsOperator = pipe(getLastChar, charIsOperator)
const hasDecimal = (value: string) => value.includes('.')
const lastValueHasDecimal = pipe(getLastNumberStr, hasDecimal)
const calcInputIsValid = (incoming: string, calcValue: string) => {
  if (lastCharIsOperator(calcValue) && charIsOperator(incoming)) {
    return false
  }
  if (lastValueHasDecimal(calcValue) && incoming === '.') {
    return false
  }
  return true
}
const removeLast = (value: string) => value?.slice(0,value.length - 2)
const removeOpTail = (value: string) => lastCharIsOperator(value)
  ? removeLast(value)
  : value
const getTotal = pipe(removeOpTail,eval)
export default function Calculator() {
  const [calcInput, setCalcInput] = useState('')
  const append = (key: string) => {
    if (key === 'C') {
      setCalcInput('')
    } else if (key === '=') {
      
      setCalcInput(getTotal(calcInput))
    } else if (calcInputIsValid(key, calcInput)) {
      setCalcInput(calcInput + key)
    }
  }
  return (
    <div className='flex flex-col'>
      <div>{calcInput}</div>
      <CalcButtonGroup onCalcBtnClick={append} />
    </div>
  )
}