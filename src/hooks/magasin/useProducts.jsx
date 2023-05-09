import useFetch from "./useFetch";
import { transpileGetProductsBody } from "@/lib/magasin/responseBodyTranspiler";

export default function useProducts() {
    const {isLoading, apiData} = useFetch('GET', 'http://localhost:8090/api/isimm/gestionMagasin/magasin/Produit')

    if(isLoading || apiData.Body === undefined) return {products: [], isLoading};
    return {products: transpileGetProductsBody(apiData), isLoading};
}