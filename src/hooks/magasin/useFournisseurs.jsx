import { transpileGetFournisseursBody } from "@/lib/magasin/responseBodyTranspiler";
import useFetch from "./useFetch";

export default function useFournisseurs() {
    const {isLoading, apiData} = useFetch('GET', 'http://localhost:8090/api/isimm/gestionMagasin/magasin/Fournisseur')
    console.log(transpileGetFournisseursBody(apiData));
    if(isLoading || apiData.Body === undefined) return {fournisseurs: [], isLoading};
    return {fournisseurs: transpileGetFournisseursBody(apiData), isLoading};
}