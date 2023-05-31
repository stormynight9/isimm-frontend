// verifier la validite des donnees

export function verifyInvoiceRecord(record) {
    console.log(record)
    console.log((record && record.product && record.quantity && record.unit_price && record.vat))
    return (record && record.product && record.quantity && record.unit_price && record.vat);
}

export function verifyProductRecord(record) {
    return (record && record.key && record.value);
}

export function verifyDemandeRecord(record) {
    return (record && record.product && record.quantity);
}