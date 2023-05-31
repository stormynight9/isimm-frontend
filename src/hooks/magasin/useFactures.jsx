import { transpileGetFactures } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

// hook pour récupérer les factures
export default function useFactures() {
    const {isLoading, apiData} = useFetch('GET', 'http://localhost:8090/api/isimm/gestionMagasin/magasin/Facture')
    if(isLoading || apiData.Body === undefined) return {factures: [], isLoading};
    console.log(transpileGetFactures(apiData))
    return {factures: transpileGetFactures(apiData), isLoading};
}