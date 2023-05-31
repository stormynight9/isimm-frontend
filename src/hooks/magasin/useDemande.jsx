import { transpileDemande } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

// hook pour récupérer une demande
export default function useDemande(id, source) {
    const {isLoading, apiData} = useFetch('GET', `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/DemandeStockable/${id}`)
    if(isLoading || apiData.Body === undefined) return {demande: {}, isLoading: true};
    return {demande: transpileDemande(apiData.Body, source), isLoading: false};
}