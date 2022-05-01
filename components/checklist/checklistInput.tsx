import { ChangeEvent, ForwardedRef, forwardRef, KeyboardEvent } from 'react'
import { ChecklistItem } from './checklist.model'

export type ChecklistInputProps = {
  onSubmit: () => void
  value: ChecklistItem['description']
  onChange: (desc: ChecklistItem['description']) => void
  onCancel?: () => void
}

function ChecklistInputRefFn({ onSubmit, value, onChange, onCancel }: ChecklistInputProps, ref: ForwardedRef<HTMLInputElement>) {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') { onSubmit() }
    else if (e.key === 'Escape') { onCancel?.() }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)
  return (
    <input type="text" className='w-full text-2xl p-3 border border-solid border-sky-300'
      value={value}
      onKeyDown={handleKeydown}
      onChange={handleChange} 
      ref={ref}/>
  )
}

const ChecklistInput = forwardRef(ChecklistInputRefFn)
export default ChecklistInput