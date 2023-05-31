import { Label } from "../ui/Label";
import { Textarea } from "../ui/Textarea";

// label + textarea
export default function TextAreaLabel({name, className, placeholder, label, type, value, onChange, disabled, error, touched, onBlur, required}) {

return <div className="grid w-full items-center gap-1.5 md:max-w-sm">
<Label htmlFor="title">
    {label}{required && <span className="text-red-600">*</span>}
</Label>
<Textarea id="title" placeholder={placeholder} readOnly={disabled} type={type} name={name} onChange={onChange} value={value} onBlur={onBlur} />
{error && touched && <p className="text-sm text-red-600">{error}</p>}
</div>
}