import useFetch from "./useFetch";
import { transpileFacture } from "@/lib/magasin/responseBodyTranspiler";

// hook pour récupérer une facture
export default function useFacture(id) {
    const {isLoading, apiData} = useFetch('GET', `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/Facture/${id}`)

    if(isLoading || apiData.Body === undefined) return {facture: {}, isLoading: true};
    return {facture: transpileFacture(apiData.Body), isLoading};
}