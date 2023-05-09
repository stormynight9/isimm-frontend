export function transpileProduct({idStockable, refStockable, magasin, name, proprites}) {
// export function transpileProduct({ refStockable, magasin, name, tva, proprites }) {
    return {
        id: idStockable,
        ref: refStockable,
        label: name,
        magasin: magasin?.idMagasin,
        properties: proprites?.map(({idProprite, cle, valeur}) => ({
            id: idProprite,
            key: cle,
            value: valeur,
        }))
    }
}

export function transpileFournisseur({idFournisseur, name, adresse, phoneNum, adresseMail}) {
    return {
        id: idFournisseur,
        label: name,
        address: adresse,
        telephone: phoneNum,
        email: adresseMail,
    }
}

export function transpileDemande({idDemande, employer, service, magasin, dateCreation, demandeUnStockables}) {
    return {
        id: idDemande,
        employer: employer?.idEmployer,
        service: service?.idService,
        magasin: magasin?.idMagasin,
        typeDemande: employer ? employer : 'service',
        date: dateCreation,
        products: demandeUnStockables?.map(({stockable, quantite}) => ({
            product: {
                id: stockable?.idStockable,
                ref: stockable?.refStockable
            },
            quantity: quantite,
        }))
    }
}

export function transpileFacture({addressFacturation, dateFacturation, fournisseur, factureStockables}) {
    return {
        address: addressFacturation,
        date: dateFacturation,
        fournisseur: fournisseur?.idFournisseur,
        products: factureStockables?.map(({stockable, quantite, tva, prix}) => ({
            product: {
                id: stockable?.idStockable,
                ref: stockable?.refStockable
            },
            quantity: quantite,
            tav: tva,
            unit_price: prix,
        })),
        nproducts: factureStockables?.length,
        nitems: factureStockables?.reduce((acc, {quantite}) => acc + quantite, 0),
        totalht: factureStockables?.reduce((acc, {prix, quantite}) => acc + (prix * quantite), 0),
        totaltva: factureStockables?.reduce((acc, {prix, quantite, tva}) => acc + ((prix * quantite) * (tva / 100)), 0),
        total: factureStockables?.reduce((acc, {prix, quantite, tva}) => acc + ((prix * quantite) * (1 + (tva / 100))), 0),
    }
}

export function transpileGetProductsBody(response) {
    return response?.Body?.map(transpileProduct);
}

export function transpileGetFournisseursBody(response) {
    return response?.Body?.map(transpileFournisseur);
}

export function transpileGetDemandesBody(response) {
    return response?.Body?.map(({idDemande, employer, service, magasin, dateCreation, demandeUnStockables}) => ({
        id: idDemande,
        employer: employer?.idEmployer,
        service: service?.idService,
        magasin: magasin?.idMagasin,
        typeDemande: employer ? employer : 'service',
        date: dateCreation,
        products: demandeUnStockables?.map(({stockable, quantite}) => ({
            product: {
                id: stockable?.idStockable,
                ref: stockable?.refStockable
            },
            quantity: quantite,
        }))
    }));
}

export function transpileGetFactures(response) {
    return response?.Body?.map(transpileFacture);
}