import { findIndex, propEq, update } from 'ramda';
import { useState } from 'react';
import CheckItemList from './checkItemList';
import { ChecklistItem, createChecklistItem, idEqualto, isDone, NewChecklistItem } from './checklist.model';
import ChecklistInput from './checklistInput';

export default function Checklist() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([])
  const checked = checklist.filter(isDone)
  const unchecked = checklist.filter(x => checked.indexOf(x) === -1)
  const add = (checklistItemDesc: string) => {
    const newItem = createChecklistItem(checklistItemDesc)
    if (checklistItemDesc) { setChecklist([...checklist, newItem]) }
  }
  const updateChecklist = (checklistItem: ChecklistItem) => {
    const updateIndex = findIndex<ChecklistItem>(idEqualto(checklistItem.id), checklist)
    const newList = update(updateIndex, checklistItem, checklist)
    if(checklistItem) { setChecklist(newList)}
  }
  return (<div className='flex flex-col gap-1'>
    <CheckItemList list={unchecked} onUpdate={updateChecklist}></CheckItemList>
    <ChecklistInput onSubmit={add}></ChecklistInput>
    <CheckItemList list={checked} onUpdate={updateChecklist}></CheckItemList>
  </div>)
}