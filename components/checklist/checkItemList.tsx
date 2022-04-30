import CheckItem from './checkItem';
import { Checklist, ChecklistItem } from './checklist.model';

export type CheckItemListProps = {
  list: Checklist;
  onUpdate: (item: ChecklistItem) => void
}

export default function CheckItemList({list, onUpdate}: CheckItemListProps) {
  const checkItems = list.map(item => (
    <CheckItem item={item} onUpdate={onUpdate} key={item.id}></CheckItem>
  ))
  return (
    <div className="flex flex-col gap-1 text-2xl">
      {checkItems}
    </div>
  )
}