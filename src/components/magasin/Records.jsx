import { Button } from "../ui/Button";

// function Record({button, onRemove, children}) {
function Record({onRemove, children}) {
    return <div className="flex flex-row items-end my-3 w-100">
        {children}
        {/* {button === 'add' && <Button onClick={onRemove}>Ajouter</Button>} */}
        {/* {button === 'remove' && <Button onClick={onRemove} variant='destructive'>Supprimer</Button>} */}
        <Button className="mx-3" onClick={onRemove} variant='destructive'>Supprimer</Button>
    </div>
}

export default function Records({componentParams, name, defaultRecordValues, RenderItem, records, onChange, verify}) {
    function handleRecordsChange(id) {
        return (record) => {
            onChange(records => {
                records = records.map(r => {if(r.id !== id) return r; else return record})
                return records;
            });
        }
    }

    function addNewRecord() {
        if(records.length >= 1 && !verify(records[records.length-1])) return;
        const newId = records.reduce((p, c) =>  p>c.id ? p : c.id, 0)
        onChange([...records, {...defaultRecordValues, id: newId+1}]);
    }

    function handleRemoveRecord(id) {
        return () => {
            onChange(records.filter(r => r.id !== id));
        }
    }

    function handleAddRecord() {
        if(records.length >= 1 && !verify(records[records.length-1])) return;
        addNewRecord();
    }

    return (
    <div className="my-5">
        {records.map(r => <Record key={r.id} button="remove" onRemove={handleRemoveRecord(r.id)}><RenderItem {...componentParams} initialValues={r} onChange={handleRecordsChange(r.id)} id={r.id}/></Record>)}
        <Button className="mx-3" onClick={handleAddRecord}>Ajouter</Button>
    </div>)
} 