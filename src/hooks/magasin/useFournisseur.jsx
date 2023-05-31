import useFetch from "./useFetch";
import { transpileFournisseur } from "@/lib/magasin/responseBodyTranspiler";

// hook pour récupérer un fournisseur
export default function useFournisseur(id) {
    const {isLoading, apiData} = useFetch('GET', `http://localhost:8090/api/isimm/gestionMagasin/magasin/Fournisseur/${id}`)

    console.log(apiData.Body)
    if(isLoading || apiData.Body === undefined) return {fournisseur: {}, isLoading: true};
    return {fournisseur: transpileFournisseur(apiData.Body), isLoading};
}