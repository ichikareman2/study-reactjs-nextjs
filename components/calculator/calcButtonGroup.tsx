import { MouseEvent } from 'react';
export type CalcButtonGroupProps = {
  onCalcBtnClick: (key: string) => void
}

const calcButtonClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-4xl'
const calcButtonFactory = (value: string, onClick: (e: MouseEvent<HTMLButtonElement>) => void) => 
  (
    <button type='button' className={calcButtonClasses}
      value={value} key={value}
      onClick={onClick}>{value}</button>
  )
const keys = 'C789/456*123-.0=+'
export default function CalcButtonGroup({ onCalcBtnClick }: CalcButtonGroupProps) {
  const handleCalcPress = (e: MouseEvent<HTMLButtonElement>) => onCalcBtnClick(e?.currentTarget?.value)
  const buttons = keys.split('').map(k => calcButtonFactory(k, handleCalcPress))
  return (
    <div className="grid grid-cols-4 gap-4">
      <div></div>
      <div></div>
      <div></div>
      {buttons}
    </div>
  )
}