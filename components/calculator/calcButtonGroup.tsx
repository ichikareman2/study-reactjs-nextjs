import { MouseEvent } from 'react';
export type CalcButtonGroupProps = {
  onCalcBtnClick: (key: string) => void
}

const calcButtonClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-4xl'


export default function CalcButtonGroup({ onCalcBtnClick }: CalcButtonGroupProps) {
  const handleCalcPress = (e: MouseEvent<HTMLButtonElement>) => onCalcBtnClick(e?.currentTarget?.value)
  return (
    <div className="grid grid-cols-4 gap-4">
      <div></div>
      <div></div>
      <div></div>
      <button type='button' className={calcButtonClasses}
        value="C" key={'C'}
        onClick={handleCalcPress}>C</button>
      <button type='button' className={calcButtonClasses}
        value="7" key={7}
        onClick={handleCalcPress}>7</button>
      <button type='button' className={calcButtonClasses}
        value="8" key={8}
        onClick={handleCalcPress}>8</button>
      <button type='button' className={calcButtonClasses}
        value="9" key={9}
        onClick={handleCalcPress}>9</button>
      <button type='button' className={calcButtonClasses}
        value="/" key={'/'}
        onClick={handleCalcPress}>/</button>
      <button type='button' className={calcButtonClasses}
        value="4" key={4}
        onClick={handleCalcPress}>4</button>
      <button type='button' className={calcButtonClasses}
        value="5" key={5}
        onClick={handleCalcPress}>5</button>
      <button type='button' className={calcButtonClasses}
        value="6" key={6}
        onClick={handleCalcPress}>6</button>
      <button type='button' className={calcButtonClasses}
        value="x" key={'x'}
        onClick={handleCalcPress}>x</button>
      <button type='button' className={calcButtonClasses}
        value="1" key={1}
        onClick={handleCalcPress}>1</button>
      <button type='button' className={calcButtonClasses}
        value="2" key={2}
        onClick={handleCalcPress}>2</button>
      <button type='button' className={calcButtonClasses}
        value="3" key={3}
        onClick={handleCalcPress}>3</button>
      <button type='button' className={calcButtonClasses}
        value="-" key={'-'}
        onClick={handleCalcPress}>-</button>
      <button type='button' className={calcButtonClasses}
        value="." key={'.'}
        onClick={handleCalcPress}>.</button>
      <button type='button' className={calcButtonClasses}
        value="0" key={0}
        onClick={handleCalcPress}>0</button>
      <button type='button' className={calcButtonClasses}
        value="=" key={'='}
        onClick={handleCalcPress}>=</button>
      <button type='button' className={calcButtonClasses}
        value="+" key={'+'}
        onClick={handleCalcPress}>+</button>
    </div>
  )
}