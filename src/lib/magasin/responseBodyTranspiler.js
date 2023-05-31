import { roundTo3 } from "./math"

// convertir les donnees de du serveur en donnees compris par l'application

export function transpileProduct({idStockable, refStockable, magasin, name, quantite, dateCreation, proprites}) {
// export function transpileProduct({ refStockable, magasin, name, tva, proprites }) {

    const data = {
        id: idStockable,
        ref: refStockable,
        label: name,
        quantity: quantite,
        date: dateCreation?.substring(0, 10),
        magasin: magasin?.idMagasin,
        keyValues: proprites?.map(({idProprite, cle, valeur}) => ({
            id: idProprite,
            key: cle,
            value: valeur,
        }))
    }
    return data;
}

export function transpileFournisseur({idFournisseur, name, adresse, phoneNum, adresseMail}) {
    return {
        id: idFournisseur,
        label: name,
        address: adresse,
        phone: phoneNum,
        email: adresseMail,
    }
}

export function transpileDemande({idDemandeStockable, description, etat, employer, service, magasin, dateCreation, demandeUnStockables}, source) {
    const data = {
        id: idDemandeStockable,
        description,
        status: etat,
        source,
        employer: employer?.idEmployer,
        service: service?.idService,
        magasin: magasin?.idMagasin,
        typeDemande: employer ? employer : 'service',
        date: dateCreation?.substring(0, 10),
        records: demandeUnStockables?.map(({stockable, quantite}) => ({
            product: stockable?.idStockable,
            quantity: quantite,
            
        }))
    }
    return data;
}

export function transpileFacture({idFacture, addressFacturation, dateFacturation, fournisseur, factureStockables}) {
    return {
        id: idFacture,
        address: addressFacturation,
        date: dateFacturation?.substring(0, 10),
        fournisseur: fournisseur?.idFournisseur,
        records: factureStockables?.map(({stockable, quantite, tva, prix}) => ({
            product: stockable?.idStockable,
            quantity: quantite,
            vat: tva,
            unit_price: prix,
        })),
        nproducts: factureStockables?.length,
        nitems: factureStockables?.reduce((acc, {quantite}) => acc + quantite, 0),
        totalht: roundTo3(factureStockables?.reduce((acc, {prix, quantite}) => acc + (prix * quantite), 0)),
        totaltva: roundTo3(factureStockables?.reduce((acc, {prix, quantite, tva}) => acc + ((prix * quantite) * (tva / 100)), 0)),
        total: roundTo3(factureStockables?.reduce((acc, {prix, quantite, tva}) => acc + ((prix * quantite) * (1 + (tva / 100))), 0)),
    }
}

export function transpileGetProductsBody(response) {
    return response?.Body?.map(transpileProduct);
}

export function transpileGetFournisseursBody(response) {
    return response?.Body?.map(transpileFournisseur);
}

export function transpileGetDemandesBody(response, source) {
    return response?.Body?.map((v) => transpileDemande(v, source));
}

export function transpileGetFactures(response) {
    return response?.Body?.map(transpileFacture);
}