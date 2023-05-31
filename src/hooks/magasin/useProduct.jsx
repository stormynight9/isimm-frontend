import useFetch from "./useFetch";
import { transpileProduct } from "@/lib/magasin/responseBodyTranspiler";

// hook pour récupérer un produit
export default function useProduct(id) {
    // const {isLoading, apiData} = useFetch('GET', `http://localhost:8090/api/isimm/gestionMagasin/magasin/Produit/${id}`)
    console.log(id)
    // const {isLoading, apiData} = useFetch('GET', `http://localhost:8090/api/isimm/gestionMagasin/magasin/Produit/${id}`)
    const {isLoading, apiData} = useFetch('GET', `http://localhost:8090/api/isimm/gestionMagasin/magasin/Produit/${id}`)

    console.log(apiData.Body)
    if(isLoading || apiData.Body === undefined) return {product: {}, isLoading: true};
    // return {product: apiData.Body, isLoading};
    return {product: transpileProduct(apiData.Body), isLoading};
    // return {product: transpileProduct(apiData.Body), isLoading};
}