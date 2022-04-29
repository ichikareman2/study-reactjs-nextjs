import { ChecklistItem } from './checklist.model';

export type CheckItemProps = {
  item: ChecklistItem;
  onUpdate: (item: ChecklistItem) => void
}
export default function CheckItem({item, onUpdate}: CheckItemProps) {
  return (
    <div className='flex gap-1'>
      <input type="checkbox" name="done"
        checked={item.done}
        onChange={() => onUpdate({...item, done: !item.done})} />
      <div className={item.done ? 'line-through' : ''}>{item.description}</div>
    </div>
  )
}