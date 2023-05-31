import axios from "axios";

const PRODUIT_API_BASE_URL = "http://localhost:8090/api/v1/produits";

class ProduitService {
  saveProduit(produit) {
    return axios.post(PRODUIT_API_BASE_URL, produit);
  }

  getProduits() {
    return axios.get(PRODUIT_API_BASE_URL+"/getAll");
  }

  deleteProduit(id) {
    return axios.delete(PRODUIT_API_BASE_URL + "/delete/" + id);
  }

  getProduitById(id) {
    return axios.get(PRODUIT_API_BASE_URL + "/" + id);
  }

  updateProduit(produit, id) {
    return axios.put(PRODUIT_API_BASE_URL + "/update/" + id, produit);
  }
}

export default new ProduitService();