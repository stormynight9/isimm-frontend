import { SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Select as ChadSelect, SelectSeparator } from "@/components/ui/Select"
import { Button } from "../ui/Button"

// le corps du select
function SelectBody({items, newButton, accessor}) {
    return <SelectContent>
        <SelectGroup>
            {items?.map((item, index) => {
                return <SelectItem key={index} value={item[accessor]}>{item.text}</SelectItem>
            })}
        </SelectGroup>
        {newButton && <>
            <SelectSeparator/>
            <Button>nouveau</Button>
        </>}
    </SelectContent>
}

// le select
export default function Select({name, className, label, items, accessor, placeholder, value, onChange, newButton, disabled}) {
    return <div className={className}>
        <div className="text-sm font-medium leading-none">
        {label}
        </div>
        <ChadSelect name={name} value={value} onValueChange={onChange} disabled={disabled}>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectBody items={items} newButton={newButton} accessor={accessor}/>
        </ChadSelect>
    </div>
}