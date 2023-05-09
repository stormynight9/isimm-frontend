import { transpileDemande } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

export default function useDemande(id) {
    const {isLoading, apiData} = useFetch('GET', 'http://localhost:8090/api/isimm/gestionMagasin/magasin/DemandeStockable/'+id)
    if(isLoading || apiData.Body === undefined) return {demandes: [], isLoading};
    return {demandes: transpileDemande(apiData.Body), isLoading};
}