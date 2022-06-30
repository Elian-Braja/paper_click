<template>
  <div class="container">
    <h3 class="p-3 text-center">Vue.js - Display a list of items with v-for</h3>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="repository in repositories" :key="repository._id">
          <td>{{ repository._id }} </td>
          <td>{{ repository.name }} </td>
          <td> <a :href="repository.url" target="_blank"> {{ repository.url }}</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import GithubService from '../GithubService';

export default {
  data() {
    return {
      repositories: []
    };
  },

  async created() {
    try {
      GithubService.getPublicRepositories().then(res => {
          this.repositories = res.data;
      })
    } catch (err) {
      console.log(err)
      this.error = err
    }
  }

};
</script>

<style scoped>
#app {
  display: flex;
  flex-wrap: wrap;
}

.entry {
  flex: 1 0 25%;
}
</style>
