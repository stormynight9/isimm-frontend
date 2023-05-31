import { transpileGetDemandesBody } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

// les demandes des employers
export default function useDemandesEmployers() {
    const {isLoading, apiData} = useFetch('GET', `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/DemandeStockable/employers`)
    if(isLoading || apiData.Body === undefined) return {demandes: [], isLoading};
    return {demandes: transpileGetDemandesBody(apiData), isLoading};
}