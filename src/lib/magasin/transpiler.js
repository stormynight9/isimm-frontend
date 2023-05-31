// transformer les donnees pour etre utilise dans des combobox

export function transpileProducts(products) {
    return products?.map(p => ({...p, text: `${p.label} (${p.ref})`}))
}

export function transpileFournisseurs(fournisseurs) {
    console.log(fournisseurs)
    return fournisseurs?.map(f => ({...f, text: `${f.label}`}))
}

export function transpileVat(vatList) {
    return vatList?.map(v => ({...v, id: v, text: `${v}%`}))
}