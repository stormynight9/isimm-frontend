import { transpileGetDemandesBody } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

// hook pour récupérer les demandes
export default function useDemandes(type) {
    let url = type === 'employer' ? `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/DemandeStockable/employers` : `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/DemandeStockable`
    const {isLoading, apiData} = useFetch('GET', url)
    if(isLoading || apiData.Body === undefined) return {demandes: [], isLoading};
    return {demandes: transpileGetDemandesBody(apiData, type), isLoading};
}