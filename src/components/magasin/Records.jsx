import { useState } from "react";
import { Button } from "../ui/Button";

function Record({onRemove, children}) {
    return <div className="flex flex-row items-end my-3 w-100">
        {children}
        <Button className="mx-3" onClick={onRemove} variant='destructive'>Supprimer</Button>
    </div>
}

export default function Records({componentParams, name, defaultRecordValues, RenderItem, records, onChange, verify, type}) {
    // const [localRecords, setLocalRecords] = useState(records?.map?.((r, index) => ({...r, rid: index})) || []);
    console.log(records)
    const localRecords = records?.map?.((r, index) => ({...r, rid: index}));
    console.log(localRecords)

    function handleRecordsChange(rid) {
        return (record) => {
            // setLocalRecords(records => {
            //     records = records.map(r => {if(r.rid !== rid) return r; else return record})
            //     return records;
            // });

            // onChange(records => {
            //     records = records.map(r => {if(r.rid !== rid) return r; else return record})
            //     return records;
            // });
            records[rid] = record;
            onChange(records)
        }
    }

    function addNewRecord() {
        if(records.length >= 1 && !verify(records[records.length-1])) return;
        // const newId = records.reduce((p, c) =>  p>c.rid ? p : c.rid, 0);
        // setLocalRecords([...records, {...defaultRecordValues, rid: newId+1}]);
        // onChange([...records, {...defaultRecordValues, rid: newId+1}]);
        // setLocalRecords([...records, {...defaultRecordValues}]);
        onChange([...records, {...defaultRecordValues}]);
    }

    function handleRemoveRecord(rid) {
        return () => {
            // setLocalRecords(records.filter(r => r.rid !== rid));
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
        {localRecords?.map(r => <Record key={r.rid} button="remove" onRemove={handleRemoveRecord(r.rid)}><RenderItem {...componentParams} initialValues={r} type={type} onChange={handleRecordsChange(r.rid)} id={r.rid}/></Record>)}
        {type==="add" && <Button type="button" className="mx-3" onClick={handleAddRecord}>Ajouter</Button>}
    </div>)
} 