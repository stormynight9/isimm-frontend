import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import useList from "./useList";
import { getProductsTranspiler } from "@/lib/magasin/responseBodyTranspiler";

export default function useProducts({setProducts}) {
    // const products
    // const [products, setProducts] = useState([{id: 1, tva: 19, ref: 'P-0001', name: 'Brosse'}, {id: 2, tva: 19, ref: 'P-0002', name: 'Stylo'}, {id: 3, tva: 19, ref: 'P-0003', name: 'Seau Peinture'}]);

    // useEffect(() => {
    //     console.log(products);
    // }, [products]);

    useFetch({ url: 'http://localhost:8090/api/isimm/gestionMagasin/magasin/Produit', method: 'GET', onSuccess: response => setProducts(getProductsTranspiler(response)) });

    // useFetch({ url: 'localhost:8090/api/isimm/gestionsMagasin/magasin/Produit', method: 'GET', onSuccess: (data) => {console.log(data)} });
    // return useList({prefix: 'magasin', name: 'produit'});
    // return products
}