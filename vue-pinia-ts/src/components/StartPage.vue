<template>
  <div class="mt-4 d-flex flex-column">
    <v-card class="mx-auto" width="100%" max-width="600">
      <v-img class="mx-auto" src="src/assets/tv-movie.svg" max-width="250">
      </v-img>
      <v-btn
        x-large
        class="d-flex mx-auto"
        color="green"
        center
        @click="setTab(2)"
        v-if="movieStore.activeTab === 1"
        >Favourites</v-btn
      >
      <v-btn
        x-large
        class="d-flex mx-auto"
        color="orange"
        v-if="movieStore.activeTab === 2"
        @click="setTab(1)"
        >Search</v-btn
      >
      <v-text-field class="ma-4" label="search" :rules="rules"></v-text-field>
    </v-card>
    <h3 class="d-flex mx-auto ma-2" v-if="movieStore.checkWatched === true">
      Watched movies:
    </h3>
    <div v-if="movieStore.activeTab === 1">
      <movie-card
        v-for="movie of movieStore.watchedMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <h3 class="d-flex mx-auto ma-2" v-if="movieStore.activeTab === 1">
      All Movies:
    </h3>
    <!--    <h3 class="d-flex mx-auto ma-2" v-if="movieStore.activeTab === 1">
      Movies number: {{ movieStore.amountMovies }}
    </h3>-->
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
//here we are using pinia store
const movieStore = useMovieStore();
//methods in composition api style
const setTab = (id) => {
  movieStore.setActiveTab(id);
};
</script>
<style scoped></style>
