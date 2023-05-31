import useFetch from "./useFetch";
import { transpileGetProductsBody } from "@/lib/magasin/responseBodyTranspiler";

// hook pour récupérer les produits
export default function useProducts() {
    const {isLoading, apiData} = useFetch('GET', `${
        import.meta.env.VITE_API_URL
    }/api/isimm/gestionMagasin/magasin/Produit`)

    if(isLoading || apiData.Body === undefined) return {products: [], isLoading: true};
    return {products: transpileGetProductsBody(apiData), isLoading: false};
}