<template>
  <div class="container">
    <h3 class="p-3 text-center">Vue.js - Display a list of items with v-for</h3>
    <button @click="getRepos">Fetch Repos</button>
    <table v-if="repositories.length && !loading" class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="repository in repositories" :key="repository._id">
          <td>{{ repository.name }}</td>
          <td>
            <a :href="repository.url" target="_blank"> {{ repository.url }}</a>
          </td>
          <td>{{ repository.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiService from "../services/api_service";

export default {
  data() {
    return {
      loading: false,
      repositories: [],
    };
  },

  methods: {
    async getRepos() {
      this.loading = true;
      try {
        const res = await ApiService.getPublicRepositories();
        this.repositories = res.data;
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
