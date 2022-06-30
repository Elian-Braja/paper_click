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
import ApiService from '../services/api_service';

export default {
  data() {
    return {
      repositories: []
    };
  },

  async created() {
    try {
      ApiService.getPublicRepositories().then(res => {
          this.repositories = res.data;
      })
    } catch (err) {
      console.log(err)
    }
  }

};
</script>

<style scoped>
</style>
