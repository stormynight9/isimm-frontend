import { verifyDemandeRecord } from "./verify";

// convertir les donnees de l'application en donnees compris par le serveur

export function transpilePostDemandeBody(demande) {
    const data = {
        description: demande.description,
        etat: demande.status,
        source: demande.typeDemande,
        employer: {
            id: demande.employer,
        },
        service: {
            idService: demande.service,
        },
        magasin: {
            idMagasin: demande.magasin,
        },
        demandeUnStockables: demande.records.filter(p => verifyDemandeRecord(p))?.map(p => ({stockable: {idStockable: p.product}, quantite: p.quantity})),
    }
    return data;
}

export function transpileProduct(product) {
    return {
        idStockable: product.id,
        refStockable: product.ref,
        name: product.label,
        magasin: {
            idMagasin: 1
        },
        proprites: product.properties?.map(p => ({cle: p.key, valeur: p.value})),
    }
}

export function transpileFacture(facture) {
    const data = {
        idFacture: facture.id,
        addressFacturation: facture.address,
        dateFacturation: facture.date,
        fournisseur: {
            idFournisseur: facture.fournisseur
        },
        factureStockables: facture.records?.map(({product, quantity, vat, unit_price}) => ({
            stockable: {
                idStockable: product,
            },
            quantite: quantity,
            tva: vat,
            prix: unit_price,
        })),
    }
    return data
}

export function transpileFournisseur(fournisseur) {
    return {
        idFournisseur: fournisseur.id,
        name: fournisseur.label,
        adresse: fournisseur.address,
        phoneNum: fournisseur.phone,
        adresseMail: fournisseur.email,
    }
}