<template>
  <div class="container">
    <h3>Public Repositories</h3>
  </div>
</template>

<script>
import GithubService from '../GithubService';

export default {
  name: 'GithubComponents',
  data() {
    return {
      repositories: [],
      error: '',
      text: ''
    }
  },

  async created() {
    try {
      this.repositories = await GithubService.getPublicRepositories();
    } catch (err) {
      this.error = err
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
