import axios from 'axios';

const url = "http://localhost:8080/public_repositories"

class GithubService {
  getPublicRepositories() {
    return axios.get(url);
  }
}

export default GithubService;