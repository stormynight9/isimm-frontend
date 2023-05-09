export function transformInvoiceRecord({id, product, quantity, price, vat}) {
    return {
        id, product: parseInt(product), quantity: parseInt(quantity), price: parseFloat(price), vat: parseFloat(vat),
        ht: parseFloat(price) * parseInt(quantity),
        tva: parseFloat(price) * parseInt(quantity) * (parseFloat(vat) / 100),
        ttc: parseFloat(price) * parseInt(quantity) * (1 + (parseFloat(vat) / 100)),
    }
}

export function transformDemandeRecord({id, product, quantity}) {
    return {id, product: parseInt(product), quantity: parseInt(quantity)}
}