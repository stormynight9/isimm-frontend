import { useNavigate } from "react-router-dom"

const Produit = ({ demandeProduit, deleteDemandeProduit }) => {
    const navigate = useNavigate()

    const editDemandeProduit = (e, id) => {
        e.preventDefault()
        navigate(`/magasin/service/Update-demandeProduits/${id}`)
    }

    const reviewDemandeProduit = (e, id) => {
        e.preventDefault()
        navigate(`/magasin/service/Review-demandeProduits/${id}`)
    }

    const handleDeleteDemandeProduit = (e, id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            deleteDemandeProduit(e, id)
        }
    }

    return (
        <tr key={demandeProduit.id}>
            <td className="whitespace-nowrap px-6 py-4 text-left">
                <div className="text-sm text-gray-500">{demandeProduit.name}</div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-left">
                <div className="text-sm text-gray-500">{demandeProduit.date}</div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-left">
                <div className="text-sm text-gray-500">{demandeProduit.typeProduit}</div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-left">
                <div className="text-sm text-gray-500">{demandeProduit.quantity}</div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-left">
                <div className="text-sm text-gray-500">
                    {demandeProduit.commentaire.length < 60
                        ? demandeProduit.commentaire
                        : demandeProduit.commentaire.slice(0, 40) + " ....."}
                </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-left">
                <div
                    className="review text-sm"
                    style={{
                        background:
                            demandeProduit.etat === "en attente"
                                ? "#525E75"
                                : demandeProduit.etat === "approuvée"
                                ? "#B4FF9F"
                                : demandeProduit.etat === "refusé"
                                ? "#FFA1A1"
                                : "",
                    }}
                >
                    {demandeProduit.etat}
                </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    onClick={(e) => editDemandeProduit(e, demandeProduit.id)}
                    className="px-4 text-indigo-600 hover:cursor-pointer hover:text-indigo-800"
                    //style={{display: isAdmin? 'none' : ''}}
                >
                    <span className="material-symbols-outlined ">edit_note</span>
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    onClick={(e, id) => handleDeleteDemandeProduit(e, demandeProduit.id)}
                    className="px-4 text-indigo-600 hover:cursor-pointer hover:text-indigo-800"
                    //style={{display: isAdmin? 'none' : ''}}
                >
                    <span className="material-symbols-outlined text-red-400 hover:text-red-500">
                        delete
                    </span>
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    onClick={(e) => reviewDemandeProduit(e, demandeProduit.id)}
                    className="text-indigo-600 hover:cursor-pointer hover:text-indigo-800"
                    //style={{display: isAdmin? '' : 'none'}}
                >
                    <span className="material-symbols-outlined text-green-400 hover:text-green-500">
                        edit_square
                    </span>
                </a>
            </td>
        </tr>
    )
}

export default Produit
