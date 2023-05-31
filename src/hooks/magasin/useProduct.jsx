import useFetch from "./useFetch";
import { transpileProduct } from "@/lib/magasin/responseBodyTranspiler";

// hook pour récupérer un produit
export default function useProduct(id) {
    const {isLoading, apiData} = useFetch('GET', `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/Produit/${id}`)

    if(isLoading || apiData.Body === undefined) return {product: {}, isLoading: true};
    return {product: transpileProduct(apiData.Body), isLoading};
}