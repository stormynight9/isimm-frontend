// assurer que les donnees sont bien formate

export function transformInvoiceRecord({id, product, quantity, unit_price, vat}) {
    return {
        id, product: parseInt(product), quantity: parseInt(quantity), unit_price: parseFloat(unit_price), vat: parseFloat(vat),
    }
}

export function transformDemandeRecord({id, product, quantity, ...demande}) {
    return {...demande, id, product: parseInt(product), quantity: parseInt(quantity)}
}