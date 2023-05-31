import axios from "axios";

const PRODUIT_API_BASE_URL = "http://localhost:8090/api/v1/demandeProduits";

class DemandeProduitService {
  saveDemandeProduit(demandeProduit) {
    return axios.post(PRODUIT_API_BASE_URL, demandeProduit);
  }

  getDemandeProduits() {
    return axios.get(PRODUIT_API_BASE_URL+"/getAll");
  }

  deleteDemandeProduit(id) {
    return axios.delete(PRODUIT_API_BASE_URL + "/delete/" + id);
  }

  getDemandeProduitById(id) {
    return axios.get(PRODUIT_API_BASE_URL + "/" + id);
  }

  updateDemandeProduit(demandeProduit, id) {
    return axios.put(PRODUIT_API_BASE_URL + "/update/" + id, demandeProduit);
  }
}

export default new DemandeProduitService();