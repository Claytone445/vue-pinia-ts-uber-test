import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import type Watched from "@/types/movie";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(2);
  const moviesInLocalStorage = localStorage.getItem("movies");
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)._value;
  }

  const setActiveTab = (id: number) => {
    activeTab.value = id;
  };
  const switchWatched = (id: number) => {
    const idx = movies.value.findIndex((element) => element.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };
  const deleteMovie = (id: number) => {
    movies.value = movies.value.filter((element) => element.id !== id);
  };

  const watchedMovies = computed(() => {
    return movies.value.filter((element) => element.isWatched);
  });

  const amountMovies = computed(() => {
    return movies.value.length;
  });

  const checkWatched = computed(() => {
    return movies.value.isWatched;
  });

  watch(
    () => movies,
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    },
    { deep: true }
  );
  //need to be returnable
  return {
    movies,
    activeTab,
    setActiveTab,
    switchWatched,
    deleteMovie,
    watchedMovies,
    amountMovies,
    checkWatched,
  };
});
