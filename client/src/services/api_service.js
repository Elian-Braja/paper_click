import axios from "axios";

const url = "http://localhost:8080";

class ApiService {
  getRoot() {
    return axios.get(url);
  }

  sendAuthorizationRequest() {
    return axios.get(url + "/user/signin/callback");
  }

  getUserProfile() {
    return axios.get(url + "/user_profile");
  }

  getPublicRepositories() {
    return axios.get(url + "/public_repositories");
  }
}

export default new ApiService();
