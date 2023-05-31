import { transpileGetFournisseursBody } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

// hook pour récupérer les fournisseurs
export default function useFournisseurs() {
    const {isLoading, apiData} = useFetch('GET', `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/Fournisseur`)
    if(isLoading || apiData.Body === undefined) return {fournisseurs: [], isLoading};
    return {fournisseurs: transpileGetFournisseursBody(apiData), isLoading};
}