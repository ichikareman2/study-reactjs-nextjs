import { HTMLAttributes, InputHTMLAttributes } from 'react'
export type CheckboxProps = HTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>
export default function Checkbox(props: CheckboxProps) {
  return (
    <div>
      <input type="checkbox" {...props} className={"w-5 h-5 " + props.className} />
    </div>
  )
}