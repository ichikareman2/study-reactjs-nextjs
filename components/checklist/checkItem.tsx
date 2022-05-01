import Checkbox from '../checkbox';
import { ChecklistItem } from './checklist.model';
import cn from 'classnames'
import { useState } from 'react';
import ChecklistInput from './checklistInput';

export type CheckItemProps = {
  item: ChecklistItem;
  onUpdate: (item: ChecklistItem) => void
}
export default function CheckItem({item, onUpdate}: CheckItemProps) {
  const [editable, setEditable] = useState<boolean>(false)
  const [tempDescription, setTempDescription] = useState<ChecklistItem['description']>('')
  const textClass = cn({
    'line-through': item.done,
    'text-gray': item.done
  })

  const updateDesc = () => {
    onUpdate({...item, description: tempDescription})
    setEditable(false)
  }

  const handleClick = () => {
    setTempDescription(item.description)
    setEditable(!editable)
  }

  const handleCancel = () => setEditable(false)

  return (
    <div className='flex gap-3 items-center'>
      <Checkbox type="checkbox" name="done"
        checked={item.done}
        onChange={(e) => onUpdate({...item, done: e.currentTarget.checked})} />
        {
          editable
            ? (<ChecklistInput value={tempDescription} onChange={setTempDescription} onSubmit={updateDesc} onCancel={handleCancel}/>)
            : (<div className={`cursor-pointer ${textClass}`} onClick={handleClick}>{item.description}</div>)
        }
    </div>
  )
}