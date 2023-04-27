// import { transpileProducts } from "@/lib/magasin/transpiler";
// import { verifyDemandeRecord } from "@/lib/magasin/verify";
// import { useEffect, useState } from "react";
// import InputLabel from "./InputLabel";
// import Records from "./Records";
// import Select from "./Select";

// function DemandeRecord({products, initialValues, onChange}) {
//     const [product, setProduct] = useState(initialValues?.product || null);
//     const [quantite, setQuantite] = useState(initialValues?.quantite || 1);

//     useEffect(() => {
//         onChange({product, quantite: parseInt(quantite)});
//     }, [product, quantite]);

//     return <>
//         <Select className="flex-1 m-3" items={transpileProducts(products)} name="produit" label="Produit" value={product} onChange={setProduct}/>
//         <InputLabel name="quantite m-3" label="Quantité" value={quantite} onChange={setQuantite} />
//     </>
// }

// export default function DemandeRecords({products, records, onChange}) {
//     return <Records records={records} onChange={onChange} componentParams={{products}} RenderItem={DemandeRecord} defaultRecordValues={{quantite: 1, prix_unitaire: 10}} verify={verifyDemandeRecord} />
// }

import { transpileProducts } from "@/lib/magasin/transpiler";
import { verifyDemandeRecord } from "@/lib/magasin/verify";
import { useEffect, useState } from "react";
import InputLabel from "./InputLabel";
import Records from "./Records";
import Select from "./Select";

function DemandeRecord({products, initialValues, onChange, id}) {
    const [product, setProduct] = useState(initialValues?.product || null);
    const [quantite, setQuantite] = useState(initialValues?.quantite || 1);

    useEffect(() => {
        onChange({id, product, quantite: parseInt(quantite)});
    }, [product, quantite, id, onChange]);

    return <>
        <Select className="flex-1 grow w-full mx-3" items={transpileProducts(products)} name="produit" label="Produit" value={product} onChange={setProduct}/>
        <InputLabel className="w-28 mx-3" name="quantite" label="Quantité" type="number" value={quantite} onChange={setQuantite} />
    </>
}

export default function DemandeRecords({products, records, onChange}) {
    return <Records records={records} onChange={onChange} componentParams={{products}} RenderItem={DemandeRecord} defaultRecordValues={{quantite: 1}} verify={verifyDemandeRecord} />
}