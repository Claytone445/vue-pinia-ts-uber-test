<template>
  <div class="mt-4 d-flex flex-column">
    <v-btn
      x-large
      class="d-flex mx-auto"
      color="orange"
      @click="searchStore.getMovies(searchMovie)"
      >Search</v-btn
    >
    <v-text-field
      class="ma-4"
      label="search"
      v-model="searchMovie"
    ></v-text-field>
    <div v-if="movieStore.activeTab === 2">
      <movie-card
        v-for="movie of searchStore.movies"
        :key="movie.id"
        :movie="movie"
        :is-search="true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MovieCard from "@/components/MovieCard.vue";
import { ref } from "vue";
import { useMovieStore } from "@/stores/MovieStore";
import { useSearchStore } from "@/stores/SearchStore";

const movieStore = useMovieStore();
const searchStore = useSearchStore();

const setTab = (id) => {
  movieStore.setActiveTab(id);
};
const searchMovie = ref("");
</script>

<style scoped></style>
