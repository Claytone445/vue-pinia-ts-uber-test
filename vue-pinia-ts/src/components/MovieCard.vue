<template>
  <v-card class="mx-auto" max-width="600" ma-2>
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
      center
    >
      <v-card-title>{{ movie.original_title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

    <v-card-text>
      <div>Originall name: {{ movie.original_title }}</div>
      <br />

      <div>Overview: {{ movie.overview }}</div>
      <br />
      <div>Release date: {{ movie.release_date }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn x-large color="green" @click="movieStore.switchWatched(movie.id)">
        <span v-if="!movie.isWatched">Watched</span>
        <span v-else>Unwatched</span>
      </v-btn>
      <v-btn x-large color="red" @click="movieStore.deleteMovie(movie.id)"
        >Delete</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { useMovieStore } from "@/stores/MovieStore";
const movieStore = useMovieStore();

const props = defineProps({
  movie: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped></style>
