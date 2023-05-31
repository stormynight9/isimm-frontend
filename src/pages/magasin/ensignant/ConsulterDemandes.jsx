import React, { useEffect, useState } from "react";
import DemandeProduitService from "../utilities/DemandeProduitService";
import ProduitDemande from "../components/ProduitDemande";

const ConsulterProduits = () => {

  const [loading, setLoading] = useState(true);
  const [demandeProduits, setDemandeProduits] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await DemandeProduitService.getDemandeProduits();
        console.log(response)
        setDemandeProduits(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteDemandeProduit = (e, id) => {
      e.preventDefault();
      DemandeProduitService.deleteDemandeProduit(id).then((res) => {
          if(demandeProduits) {
              setDemandeProduits((prevElement) => {
                  return prevElement.filter((demandeProduit) => demandeProduit.id !== id);
              })
          }
      });
  }

  return (
    <div className="container mx-auto my-8" style={{ marginTop: "120px" }}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Consulter demandes
            </h1>
            <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
                Ici, vous pouvez consulter a liste de toutes les demandes.
            </h2>
      <div className="flex shadow border-b mt-6">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Nom de l'enseignant
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Date de la demande
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Type de produit
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Quantité
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Commentaire
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Etat
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
              <tbody className="bg-white">
                  {demandeProduits.map((demandeProduit) => (
                      <ProduitDemande 
                      demandeProduit={demandeProduit}
                      deleteDemandeProduit={deleteDemandeProduit} 
                      isAdmin={isAdmin} 
                      key={demandeProduit.id}></ProduitDemande>
                  ))}
              </tbody>
          )}
        </table>
      </div>
    </div>
    
  );
}
export default ConsulterProduits
