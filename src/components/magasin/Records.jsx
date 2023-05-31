import { Button } from "../ui/Button";

// un enregistrement
function Record({onRemove, children, remove}) {
    return <div className="flex flex-row items-end my-3 w-100">
        {children}
        {remove && <Button className="mx-3" onClick={onRemove} variant='destructive'>Supprimer</Button>}
    </div>
}

// les enregistrements
export default function Records({componentParams, name, defaultRecordValues, RenderItem, records, onChange, verify, type}) {
    console.log(records)
    const localRecords = records?.map?.((r, index) => ({...r, rid: index}));
    console.log(localRecords)

    function handleRecordsChange(rid) {
        return (record) => {
            records[rid] = record;
            onChange(records)
        }
    }

    function addNewRecord() {
        if(records.length >= 1 && !verify(records[records.length-1])) return;
        onChange([...records, {...defaultRecordValues}]);
    }

    function handleRemoveRecord(rid) {
        return () => {
            console.log(records.filter((r, index) => {
                console.log(index, rid)
                return index !== rid
            }))
            onChange(records.filter((r, index) => {
                console.log(index, rid)
                return index !== rid
            }));
        }
    }

    function handleAddRecord() {
        if(records.length >= 1 && !verify(records[records.length-1])) return;
        addNewRecord();
    }

    return (
    <div className="my-5">
        {localRecords?.map(r => <Record key={r.rid} button="remove" onRemove={handleRemoveRecord(r.rid)} remove={type === 'edit' || type === 'add'}><RenderItem {...componentParams} initialValues={r} type={type} onChange={handleRecordsChange(r.rid)} id={r.rid}/></Record>)}
        {type==="add" && <Button type="button" className="mx-3" onClick={handleAddRecord}>Ajouter</Button>}
    </div>)
} 