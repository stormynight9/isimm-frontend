import { transpileGetFactures } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

// hook pour récupérer les factures
export default function useFactures() {
    const {isLoading, apiData} = useFetch('GET', `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/Facture`)
    if(isLoading || apiData.Body === undefined) return {factures: [], isLoading};
    return {factures: transpileGetFactures(apiData), isLoading};
}