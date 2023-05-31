import React from "react";
import { useNavigate } from "react-router-dom";

const Produit = ({ demandeProduit, deleteDemandeProduit, isAdmin }) => {
  const navigate = useNavigate();

  const editDemandeProduit = (e, id) => {
    e.preventDefault();
    navigate(`/magasin/service/Update-demandeProduits/${id}`);
  };

  const reviewDemandeProduit = (e, id) => {
    e.preventDefault();
    navigate(`/magasin/service/Review-demandeProduits/${id}`);
  };

  const handleDeleteDemandeProduit = (e, id) => {
    if(window.confirm('Are you sure you want to delete this product?')){
      deleteDemandeProduit(e, id)
    }
  }

  return (
    <tr key={demandeProduit.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{demandeProduit.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{demandeProduit.date}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{demandeProduit.typeProduit}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{demandeProduit.quantity}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {
            demandeProduit.commentaire.length < 60 
            ? demandeProduit.commentaire
            : demandeProduit.commentaire.slice(0, 40) + ' .....'
          }
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className='text-sm review' 
        style={{
          background: demandeProduit.etat==='en attente' ? '#525E75': demandeProduit.etat==='approuvée' ? '#B4FF9F' : demandeProduit.etat==='refusé' ? '#FFA1A1' : ''
          }}>
          {demandeProduit.etat}
        </div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editDemandeProduit(e, demandeProduit.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
          style={{display: isAdmin? 'none' : ''}}>
          <span className="material-symbols-outlined ">
            edit_note
          </span>
        </a>
        <a
          onClick={(e, id) => handleDeleteDemandeProduit(e, demandeProduit.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
          style={{display: isAdmin? 'none' : ''}}>
          <span className="material-symbols-outlined text-red-400 hover:text-red-500">
            delete
          </span>
        </a>
        <a onClick={(e, id) => reviewDemandeProduit(e, demandeProduit.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
          style={{display: isAdmin? '' : 'none'}}>
          <span className="material-symbols-outlined text-green-400 hover:text-green-500">
            edit_square
          </span>
        </a>
      </td>
    </tr>
  );
};

export default Produit;