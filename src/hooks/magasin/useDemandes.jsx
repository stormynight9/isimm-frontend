import { transpileGetDemandesBody } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

export default function useDemandes(type) {
    const {isLoading, apiData} = useFetch('GET', 'http://localhost:8090/api/isimm/gestionMagasin/magasin/DemandeStockable?type='+type)
    if(isLoading || apiData.Body === undefined) return {demandes: [], isLoading};
    return {demandes: transpileGetDemandesBody(apiData), isLoading};
}