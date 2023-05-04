import { SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Select as ChadSelect, SelectSeparator } from "@/components/ui/Select"
import { Button } from "../ui/Button"

function SelectBody({items, newButton}) {
    return <SelectContent>
        <SelectGroup>
            {items.map((item, index) => {
                return <SelectItem key={index} value={item.id}>{item.text}</SelectItem>
            })}
        </SelectGroup>
        {newButton && <>
            <SelectSeparator/>
            <Button>nouveau</Button>
        </>}
    </SelectContent>
}

export default function Select({name, className, label, items, placeholder, value, onChange, newButton}) {
    return <div className={className}>
        <div className="text-sm font-medium leading-none">
        {label}
        </div>
        <ChadSelect name={name} value={value} onValueChange={onChange}>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectBody items={items} newButton={newButton}/>
        </ChadSelect>
    </div>
}