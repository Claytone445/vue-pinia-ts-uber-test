import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(2);

  const setActiveTab = (id) => {
    activeTab.value = id;
  };
  const switchWatched = (id) => {
    const idx = movies.value.findIndex((element) => element.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };
  const deleteMovie = (id) => {
    movies.value = movies.value.filter((element) => element.id !== id);
  };

  const watchedMovies = computed(() => {
    movies.value.filter((element) => element.isWatched);
  });

  const amountMovies = computed(() => {
    movies.value.length;
  });

  const checkWatched = computed(() => {
    movies.value.isWatched;
  });

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
