import { useState } from "react";
import useFetch from "./useFetch";
import useList from "./useList";

export default function useFournisseurs() {
    // const products
    const [fournisseurs, setFournisseurs] = useState([{id: 1, ref: 'F-0001', name: 'Ste Plus'}]);
    // useFetch({ url: 'localhost:3000/magasin/produit', method: 'GET', onSuccess: setProducts });
    // return useList({prefix: 'magasin', name: 'produit'});
    return fournisseurs;
}