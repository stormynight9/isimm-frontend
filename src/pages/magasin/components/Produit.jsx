import { useNavigate } from "react-router-dom"

const Produit = ({ produit, deleteProduit }) => {
    const navigate = useNavigate()

    const editProduit = (e, id) => {
        e.preventDefault()
        navigate(`/magasin/service/Update-produits/${id}`)
    }

    const handleDeleteProduit = (e, id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            deleteProduit(e, id)
        }
    }

    return (
        <tr key={produit.id}>
            <td className="whitespace-nowrap px-6 py-4 text-left">
                <div className="text-sm text-gray-500">{produit.typeProduit}</div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-left">
                <div className="text-sm text-gray-500">{produit.quantity}</div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-left">
                <div className="text-sm text-gray-500">{produit.commentaire}</div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    onClick={(e) => editProduit(e, produit.id)}
                    className="px-4 text-indigo-600 hover:cursor-pointer hover:text-indigo-800"
                >
                    <span className="material-symbols-outlined ">edit_note</span>
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    onClick={(e) => handleDeleteProduit(e, produit.id)}
                    className="text-indigo-600 hover:cursor-pointer hover:text-indigo-800"
                >
                    <span className="material-symbols-outlined text-red-400 hover:text-red-500">
                        delete
                    </span>
                </a>
            </td>
        </tr>
    )
}

export default Produit
