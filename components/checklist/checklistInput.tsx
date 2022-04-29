import { useState, KeyboardEvent } from 'react'
import { ChecklistItem } from './checklist.model'

export type ChecklistInputProps = {
  onSubmit: (desc: ChecklistItem['id']) => void
}

export default function ChecklistInput({onSubmit}: ChecklistInputProps) {
  const [desc, setDesc] = useState('')
  const onKeyDown = (e: KeyboardEvent) => {
    console.log(e, e.key)
    if(e.key === 'Enter') {onSubmit(desc)}
  }
  return(<>
    <input type="text" className='w-full'
      value={desc}
      onKeyDown={onKeyDown}
      onChange={(e) => setDesc(e.target.value)}/>
  </>)
}