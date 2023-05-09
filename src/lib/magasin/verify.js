export function verifyInvoiceRecord(record) {
    return (record && record.product && record.quantite && record.prix_unitaire);
}

export function verifyProductRecord(record) {
    return (record && record.key && record.value);
}

export function verifyDemandeRecord(record) {
    return (record && record.product && record.quantity);
}