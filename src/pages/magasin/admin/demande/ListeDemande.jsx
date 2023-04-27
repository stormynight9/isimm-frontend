import { useState } from "react";

export default function ListeDemandes({role}) {
    const [demades, setDemades] = useState([{produit: {id: 1, name: 'hello'}, quantite: 10, status: 'fulfilled'}, {produit: {id: 2, name: 'hello 2'}, quantite: 2, status: 'pending'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'canceled'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'verified'}]);

    if(role === 'service') {

    } else {

    }

    // show demandes in a table using react-table


    return 
}