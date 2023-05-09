import useFetch from "./useFetch";
import { transpileFacture } from "@/lib/magasin/responseBodyTranspiler";

export default function useFacture(id) {
    const {isLoading, apiData} = useFetch('GET', `http://localhost:8090/api/isimm/gestionMagasin/magasin/Facture/${id}`)

    console.log(apiData.Body)
    if(isLoading || apiData.Body === undefined) return {product: {}, isLoading: true};
    return {product: transpileFacture(apiData.Body), isLoading};
}