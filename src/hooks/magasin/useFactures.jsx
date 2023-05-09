import { transpileGetFactures } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

export default function useFactures() {
    const {isLoading, apiData} = useFetch('GET', 'http://localhost:8090/api/isimm/gestionMagasin/magasin/Facture')
    if(isLoading || apiData.Body === undefined) return {fournisseurs: [], isLoading};
    console.log(transpileGetFactures(apiData));
    return {fournisseurs: transpileGetFactures(apiData), isLoading};
}