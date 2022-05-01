import { ChangeEvent, KeyboardEvent } from 'react'
import { ChecklistItem } from './checklist.model'

export type ChecklistInputProps = {
  onSubmit: () => void
  value: ChecklistItem['description']
  onChange: (desc: ChecklistItem['description']) => void
  onCancel?: () => void
}

export default function ChecklistInput({ onSubmit, value, onChange, onCancel }: ChecklistInputProps) {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') { onSubmit() }
    else if (e.key === 'Escape') { onCancel?.() }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)
  return (
    <input type="text" className='w-full text-2xl p-3 border border-solid border-sky-300'
      value={value}
      onKeyDown={handleKeydown}
      onChange={handleChange} />
  )
}