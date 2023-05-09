import { Input } from "../ui/Input";

export default function InputLabel({name, disabled, className, label, type, value, onChange}) {
  return <div className={className}>
    <div className="text-sm font-medium leading-none">
      {label}
    </div>
    <Input name={name} disabled={disabled} label={label} type={type} value={value} onChange={e => onChange(e)}/>
  </div>
}