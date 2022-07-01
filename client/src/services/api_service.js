import axios from "axios";

const url = "http://localhost:8080";

class ApiService {
  getPublicRepositories() {
    return axios.get(url + "/public_repositories");
  }
}

export default new ApiService();
