import { transpileGetDemandesBody } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

// hook pour récupérer les demandes
export default function useDemandes(type) {
    console.log(type)
    let url = type === 'employer' ? 'http://localhost:8090/api/isimm/gestionMagasin/magasin/DemandeStockable/employers' : 'http://localhost:8090/api/isimm/gestionMagasin/magasin/DemandeStockable'
    const {isLoading, apiData} = useFetch('GET', url)
    if(isLoading || apiData.Body === undefined) return {demandes: [], isLoading};
    return {demandes: transpileGetDemandesBody(apiData, type), isLoading};
}