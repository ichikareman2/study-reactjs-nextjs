import { findIndex, update, pipe, thunkify } from 'ramda';
import { useState } from 'react';
import CheckItemList from './checkItemList';
import { ChecklistItem, createChecklistItem, idEqualto, isDone } from './checklist.model';
import ChecklistInput from './checklistInput';

export default function Checklist() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([])
  const [newItemValue, setNewItemValue] = useState<string>('')

  const checked = checklist.filter(isDone)
  const unchecked = checklist.filter(x => checked.indexOf(x) === -1)

  const add = () => {
    if (!newItemValue?.trim()) { return }
    const checklistItemDesc = newItemValue
    const newItem = createChecklistItem(checklistItemDesc)
    setChecklist([...checklist, newItem])
    setNewItemValue('')
  }
  const updateChecklist = (checklistItem: ChecklistItem) => {
    if(!checklistItem) { return }
    const updateIndex = findIndex<ChecklistItem>(idEqualto(checklistItem.id), checklist)
    const newList = update(updateIndex, checklistItem, checklist)
    setChecklist(newList)
  }

  return (<div className='flex flex-col gap-1'>
    <CheckItemList list={unchecked} onUpdate={updateChecklist}></CheckItemList>
    <ChecklistInput onSubmit={add} onChange={setNewItemValue} value={newItemValue} onCancel={setNewItemValue.bind(undefined, '')}/>
    <CheckItemList list={checked} onUpdate={updateChecklist}></CheckItemList>
  </div>)
}