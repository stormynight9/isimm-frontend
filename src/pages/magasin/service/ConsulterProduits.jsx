import React, { useEffect, useState } from "react";
import ProduitService from "../utilities/ProduitService";
import Produit from "../components/Produit";

const ConsulterProduits = () => {

  const [loading, setLoading] = useState(true);
  const [produits, setProduits] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProduitService.getProduits();
        setProduits(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteProduit = (e, id) => {
      e.preventDefault();
      ProduitService.deleteProduit(id).then((res) => {
          if(produits) {
              setProduits((prevElement) => {
                  return prevElement.filter((produit) => produit.id !== id);
              })
          }
      });
  }

  return (
    <div className="container mx-auto my-8" style={{ marginTop: "120px" }}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Consulter produits</h1>
        <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">Ici, vous pouvez consulter a liste de touts les produits.</h2>

      <div className="flex shadow border-b mt-6">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Type de produit
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Quantité disponible
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Commentaire
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
              <tbody className="bg-white">
                  {produits.map((produit) => (
                      <Produit 
                      produit={produit}
                      deleteProduit={deleteProduit} 
                      key={produit.id}></Produit>
                  ))}
              </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
export default ConsulterProduits
