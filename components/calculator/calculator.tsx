import { useState } from 'react';
import { pipe } from 'ramda'
import CalcButtonGroup from './calcButtonGroup';
// move to model and make alias for string or specific strings type for calc
const validators = ['+','-','x','/']
// make recursive?
const getLastNumberStr = (calcValue: string) => {
  let i = calcValue.length
  let str = ''
  while(i--) {
    if(validators.indexOf(calcValue[i]) > -1) {
      break
    } else {
      str += calcValue[i]
    }
  }
  return str
}
const getLastChar = (calcValue: string) => calcValue[calcValue.length - 1]
const charIsValidator = (char:string) => validators.indexOf(char) > -1
const lastCharIsValidator = pipe(getLastChar,charIsValidator)
const hasDecimal = (value: string) => value.includes('.')
const lastValueHasDecimal = pipe(getLastNumberStr, hasDecimal)
const calcInputIsValid = (incoming: string, calcValue: string) => {
  if(lastCharIsValidator(calcValue) && charIsValidator(incoming)) {
    return false
  }
  if(lastValueHasDecimal(calcValue) && incoming === '.') {
    return false
  }
  return true
}

export default function Calculator() {
  const [calcInput, setCalcInput] = useState('')
  const append = (key: string) => {
    if(key === 'C') {
      setCalcInput('')
    } else if(calcInputIsValid(key, calcInput)) {
      setCalcInput(calcInput + key)
    } 
  }
  return (
    <div className='flex flex-col'>
      <div>{calcInput}</div>
      <CalcButtonGroup onCalcBtnClick={append}/>
    </div>
  )
}