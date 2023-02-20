import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(2);
  const moviesInLocalStorage = localStorage.getItem("movies");
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)._value;
  }

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

  watch(
    () => movies,
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    },
    { deep: true }
  );

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
