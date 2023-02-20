<template>
  <div class="mt-4 d-flex flex-column">
    <v-card class="mx-auto logo__Color" width="100%" max-width="600">
      <v-img
        class="mx-auto ma-4"
        src="src/assets/movieLogo.png"
        max-width="250"
      >
      </v-img>
      <v-btn
        x-large
        class="d-flex mx-auto"
        color="green"
        center
        @click="setTab(1)"
        >Favourites</v-btn
      >
      <SearchMovie />
    </v-card>
    <h3 class="d-flex mx-auto ma-2" v-if="movieStore.checkWatched">
      Watched movies:
    </h3>
    <div v-if="movieStore.activeTab === 1">
      <movie-card
        v-for="movie of movieStore.watchedMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <h3 class="d-flex mx-auto ma-2" v-if="movieStore.activeTab === 2">
      All Movies:
    </h3>
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
import SearchMovie from "@/components/SearchMovie.vue";
//here we are using pinia store
const movieStore = useMovieStore();
//methods in composition api style
const setTab = (id) => {
  movieStore.setActiveTab(id);
};
</script>
<style scoped></style>
