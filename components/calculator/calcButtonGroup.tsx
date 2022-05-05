const calcButtonClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'

const calcButtonChars = [
  <button type='button' className={calcButtonClasses} key={'M C'}>M C</button>,
  <button type='button' className={calcButtonClasses} key={'M +'}>M +</button>,
  <button type='button' className={calcButtonClasses} key={'M -'}>M -</button>,
  <button type='button' className={calcButtonClasses} key={'C'}>C</button>,
  <button type='button' className={calcButtonClasses} key={7}>7</button>,
  <button type='button' className={calcButtonClasses} key={8}>8</button>,
  <button type='button' className={calcButtonClasses} key={9}>9</button>,
  <button type='button' className={calcButtonClasses} key={'/'}>/</button>,
  <button type='button' className={calcButtonClasses} key={4}>4</button>,
  <button type='button' className={calcButtonClasses} key={5}>5</button>,
  <button type='button' className={calcButtonClasses} key={6}>6</button>,
  <button type='button' className={calcButtonClasses} key={'x'}>x</button>,
  <button type='button' className={calcButtonClasses} key={1}>1</button>,
  <button type='button' className={calcButtonClasses} key={2}>2</button>,
  <button type='button' className={calcButtonClasses} key={3}>3</button>,
  <button type='button' className={calcButtonClasses} key={'-'}>-</button>,
  <button type='button' className={calcButtonClasses} key={'.'}>.</button>,
  <button type='button' className={calcButtonClasses} key={0}>0</button>,
  <button type='button' className={calcButtonClasses} key={'='}>=</button>,
  <button type='button' className={calcButtonClasses} key={'+'}>+</button>,
]
export default function CalcButtonGroup() {
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {calcButtonChars}
    </div>
  )
}