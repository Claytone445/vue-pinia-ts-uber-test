<template>
  <div class="mt-4 d-flex flex-column">
    <v-card class="mx-auto" width="100%" max-width="600">
      <v-img class="mx-auto" src="src/assets/tv-movie.svg" max-width="250">
      </v-img>
      <v-btn x-large class="d-flex mx-auto" color="green" center
        >Favourites</v-btn
      >
      <v-btn
        x-large
        class="ma-6 mx-auto"
        color="orange"
        v-if="movieStore.activeTab === 2"
        >Search</v-btn
      >
      <v-text-field class="ma-4" label="search" :rules="rules"></v-text-field>
    </v-card>
    <h3 class="d-flex mx-auto ma-2">Watched movies</h3>
    <movie-card
      v-for="movie of movieStore.watchedMovies"
      :key="movie.id"
      :movie="movie"
    />
    <h3 class="d-flex mx-auto ma-2">Movies</h3>
    <div v-if="movieStore.activeTab === 1">
      <movie-card
        v-for="movie of movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMovieStore } from "@/stores/MovieStore";
import MovieCard from "@/components/MovieCard.vue";
const movieStore = useMovieStore();
</script>
<style scoped></style>
