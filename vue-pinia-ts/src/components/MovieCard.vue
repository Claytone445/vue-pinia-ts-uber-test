<template>
  <v-card class="mx-auto" max-width="600" ma-2>
    <v-img
      class="align-end text-white"
      width="100%"
      cover
      max-height="200"
      lazy-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAACbCAMAAAAp3sKHAAAAM1BMVEX////p6uzu7u7+/v7t7e3v7+/q6e7///3y8vLm5+nf39/5+fns7O729vbi4uLp6enl5Ok+6ksVAAAEIUlEQVR4nO2dAXebIBhFVaDRoXH//9dObMzUIFZ4BdR3c9aTZknDbt8Hn4ZkRUkAFKkHcA2oEQI1QqBGCAuNzftav7ihmd+pn93QzO5r+0HN5g2fT9SvH9CvH9DPrq1+4McNjiH167/4/0S99QGr8b6lDFfaph2/fWts243nJw7al9VJ4/BNQw4z6XxpbDqtBTmI1u3L5KSxEAU5iiiGufFb49dA2T5Tj+h0PB6P4assqTGEx2P0KBdpLKnxIFaNTONRqBHCdlELbZbwDbrU486M7TSKoefRlfqkGi516nFnhltjJ21UsmIalzg1ik5WnyglFTUucTQ8RqPF4uBRsqhX7KTRarGa0mjqPvWB7Bbj4HLRaCvq6q1xPPJO7WuTiBZdDc++RjGsNsq6CmWAOk0ahTTdT2pfdsz0HU9kmMZejSt3jlQqZl0HpnGIosrTo1QxF5mguVFLM1zrXdJznjSaySfb0+RRW56woo7dVxwg7tDCGp5443yRa+MYlkZtLtEQ5uXKiG4OEKZRRW6+1TU1SlnVUZuYTC0Gzo1V5IPBc2n8cRo73cXlkkVNJoKKmkwwjRCoEQI1QnDv4dG1FVV3ma6YqXBvPrHLosIPHBpdPRpNLtnRuHXyRNPjAs/9jbS4hBvzIFAjBG5ahsA0QqBGCE6NIt99Tr8AXOPrRNnNupoQla5TE/p27aG3R4fG4bJxauKamJcooBrLSWPMl/2SIyVY42uJEYV97/dFkdJ/N8GOxpivnqamVsJ7MXD3jbfSOKTRU6J7biyKePtzssC/MXE1PBm/XeM3CDn9t6PxVmz9i8W+CvdRTNJ0JObQb8C9xFjfwXoTqiNrD1dqN7358+z2pk2235/MgtgbZL97dmHnYNC+a+LqSIzG96mJ7p5z4yqNQUUtbr5Sz9C7R4k8bQvBc/PJDVjkce/OzqIWJ/7YvELn8WY3Mwqdes30R1bZvNmt2NgmegZknUcav3fbnpdMNBbbm5bPgCnqHN6WbtCpG2F/qjr53LizafkUxB36dfvGmDXtu2n5HCTWOH1G2ZmJ+/Fal92Yl8GHa11BY1y4aRkC0wiBGiFQIwTOjRCYRgjUCIFFDYFphECNEKgRAudGCEwjBGqEwKKGwDRCoEYI1AiBcyMEphECNUJgUUNgGiFQIwRqhMC5EQLTCIEaIbCoITCNEKgRAjVC4NwIgWmEQI0QqBEC50YITCMEaoTAoobANEKgRgjUCIFzIwSmEQI1QmBRQ2AaIVAjBGqEwLkRAtMIgRohsKghMI0QqBECNULg3AjBorFkGg/zbbFoJ43jV2r0pB1TOGlkUXuy1Mg0ekKNEKgRwufceO6PZE3EKo0NNXrxtdLYpv5fjk9J+3el8fmHHOe51FiaXrwlhxkstjONJAxqhECNEKgRwj9NVfzRWnnncwAAAABJRU5ErkJggg=="
      :src="`${BASE_IMG_PATH}${movie.poster_path}`"
    >
      <v-card-title>{{ movie.original_title }}</v-card-title>
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-img>

    <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

    <v-card-text>
      <div>Originall name: {{ movie.original_title }}</div>
      <br />

      <div>Overview: {{ movie.overview }}</div>
      <br />
      <div>Release date: {{ movie.release_date }}</div>
    </v-card-text>

    <v-card-actions v-if="!isSearch">
      <v-btn x-large color="green" @click="movieStore.switchWatched(movie.id)">
        <span v-if="!movie.isWatched">Watched</span>
        <span v-else>Unwatched</span>
      </v-btn>
      <v-btn x-large color="red" @click="movieStore.deleteMovie(movie.id)"
        >Delete</v-btn
      >
    </v-card-actions>
    <v-card-actions v-else>
      <v-btn
        x-large
        color="deep-purple-accent-1"
        @click="searchStore.addToUserMovies(movie)"
      >
        <span>Add</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { BASE_IMG_PATH } from "@/constants/constants";

import { useMovieStore } from "@/stores/MovieStore";
import { useSearchStore } from "@/stores/SearchStore";

const movieStore = useMovieStore();
const searchStore = useSearchStore();

const props = defineProps({
  movie: {
    type: Object,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
