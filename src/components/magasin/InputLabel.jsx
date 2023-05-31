import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

// label + input
export default function InputLabel({name, disabled, required, placeholder, className, label, type, value, onChange, error, touched, onBlur}) {
  // return <div className={className}>
  //   <div className="text-sm font-medium leading-none">
  //     {label}
  //   </div>
  //   <Input name={name} disabled={disabled} label={label} type={type} value={value} onChange={e => onChange(e)}/>
  // </div>
  return <div className="grid w-full items-center gap-1.5 md:max-w-sm">
        <Label htmlFor="title">
            {label}{required && <span className="text-red-600">*</span>}
        </Label>
        <Input id="title" placeholder={placeholder} readOnly={disabled} type={type} name={name} onChange={onChange} value={value} onBlur={onBlur} />
        {error && touched && <p className="text-sm text-red-600">{error}</p>}
    </div>
}