export function getProductsTranspiler(response) {
    return response?.Body?.map(({idStockable, refStockable, magasin, name, tva, proprites}) => ({
        id: idStockable,
        ref: refStockable,
        name,
        magasin: magasin?.idMagasin,
        tva,
        properties: proprites?.map(({idProprite, cle, valeur}) => ({
            id: idProprite,
            key: cle,
            value: valeur,
        }))
    }));
}