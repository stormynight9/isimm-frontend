import { verifyDemandeRecord } from "./verify";

export function transpilePostDemandeBody(demande) {
    return {
        description: demande.description,
        etat: "pending",
        source: demande.typeDemande,
        employer: {
            idEmployer: demande.employer,
        },
        service: {
            idService: demande.service,
        },
        demandeUnStockables: demande.records.filter(p => verifyDemandeRecord(p))?.map(p => ({produit: {refStockable: p.product}, quantite: p.quantity})),
    }
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
    return
}