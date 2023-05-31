import useFetch from "./useFetch";
import { transpileGetProductsBody } from "@/lib/magasin/responseBodyTranspiler";

// hook pour récupérer les produits
export default function useProducts() {
    const {isLoading, apiData} = useFetch('GET', 'http://localhost:8090/api/isimm/gestionMagasin/magasin/Produit')

    if(isLoading || apiData.Body === undefined) return {products: [], isLoading: true};
    console.log(apiData)
    // console.log(apiError)
    // if(apiError) return {products: [
    //     {
    //         id: 1,
    //         label: 'Produit 1',
    //         ref: 'dfaslf',
    //         quantity: 100,
    //     },
    //     {
    //         id: 2,
    //         label: 'Produit 2',
    //         ref: 'adfal',
    //         quantity: 200,
    //     },
    // ], isLoading};
    console.log(transpileGetProductsBody(apiData))
    return {products: transpileGetProductsBody(apiData), isLoading: false};
}