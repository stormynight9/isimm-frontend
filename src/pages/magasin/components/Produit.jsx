import React from "react";
import { useNavigate } from "react-router-dom";

const Produit = ({ produit, deleteProduit }) => {
  const navigate = useNavigate();

  const editProduit = (e, id) => {
    e.preventDefault();
    navigate(`/magasin/service/Update-produits/${id}`);
  };

  const handleDeleteProduit = (e, id) => {
    if(window.confirm('Are you sure you want to delete this product?')){
      deleteProduit(e, id)
    }
  }

  return (
    <tr key={produit.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{produit.typeProduit}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{produit.quantity}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{produit.commentaire}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editProduit(e, produit.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          <span className="material-symbols-outlined ">
            edit_note
          </span>
        </a>
        <a
          onClick={(e, id) => handleDeleteProduit(e, produit.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          <span className="material-symbols-outlined text-red-400 hover:text-red-500">
            delete
          </span>
        </a>
      </td>
    </tr>
  );
};

export default Produit;