import useFetch from "./useFetch";
import { transpileFacture } from "@/lib/magasin/responseBodyTranspiler";

// hook pour récupérer une facture
export default function useFacture(id) {
    const {isLoading, apiData} = useFetch('GET', `http://localhost:8090/api/isimm/gestionMagasin/magasin/Facture/${id}`)

    console.log(apiData.Body)
    if(isLoading || apiData.Body === undefined) return {facture: {}, isLoading: true};
    return {facture: transpileFacture(apiData.Body), isLoading};
}