import { propEq } from 'ramda';

export type ChecklistItem = {
  done: boolean;
  description: string;
  dateAdded: string;
  dateEdited: string;
  id: string;
}
export type NewChecklistItem = Omit<ChecklistItem, 'id'>
export type Checklist = ChecklistItem[]

export const idEqualto = propEq<ChecklistItem['id']>('id');
export const generateNewId = (): ChecklistItem['id'] => ((Math.random() * Date.now()) + '').replace('.','')
export const createChecklistItem = (desc: string): ChecklistItem => ({
  done: false,
  description: desc,
  dateAdded: new Date().toISOString(),
  dateEdited: new Date().toISOString(),
  id: generateNewId()
})
export const isDone = (item: ChecklistItem) => item.done
export const toggle = (item: ChecklistItem) => ({
  ...item,
  done: !item.done
})