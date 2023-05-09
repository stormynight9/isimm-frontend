import { Textarea } from "../ui/Textarea";

export default function TextAreaLabel({name, className, label, type, value, onChange}) {
  return <div className={className}>
    <div className="text-sm font-medium leading-none">
      {label}
    </div>
    <Textarea name={name} label={label} type={type} value={value} onChange={e => onChange(e)}/>
  </div>
}