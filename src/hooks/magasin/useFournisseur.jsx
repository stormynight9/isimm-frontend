import useFetch from "./useFetch";
import { transpileFournisseur } from "@/lib/magasin/responseBodyTranspiler";

// hook pour récupérer un fournisseur
export default function useFournisseur(id) {
    const {isLoading, apiData} = useFetch('GET', `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/Fournisseur/${id}`)

    if(isLoading || apiData.Body === undefined) return {fournisseur: {}, isLoading: true};
    return {fournisseur: transpileFournisseur(apiData.Body), isLoading};
}