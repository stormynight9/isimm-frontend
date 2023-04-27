export function transpileProducts(products) {
    return products.map(p => ({id: p.id, text: `${p.name} (${p.ref}) - ${p.tva}%`}))
}

export function transpileFournisseurs(fournisseurs) {
    return fournisseurs.map(f => ({id: f.id, text: `${f.name} (${f.ref})`}))
}

export function transpileVat(vatList) {
    return vatList.map(v => ({id: v, text: `${v}%`}))
}