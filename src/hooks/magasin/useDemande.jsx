import { transpileDemande } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

// hook pour récupérer une demande
export default function useDemande(id, source) {
    const {isLoading, apiData} = useFetch('GET', 'http://localhost:8090/api/isimm/gestionMagasin/magasin/DemandeStockable/'+id)
    if(isLoading || apiData.Body === undefined) return {demande: {}, isLoading: true};
    console.log(apiData)
    console.log(transpileDemande(apiData.Body, source))
    return {demande: transpileDemande(apiData.Body, source), isLoading: false};
}