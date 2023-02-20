import { defineStore } from "pinia";
import { useMovieStore } from "@/stores/MovieStore";
import { ref } from "vue";

const url =
  "https:api.themoviedb.org/3/search/movie?api_key=25aaa15cb506af838b8a23910e9d8dd1&query=";

/*export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      this.movies = data.results;
      const movieStore = useMovieStore();
      movieStore.activeTab === 1
        ? (movieStore.activeTab = 2)
        : (movieStore.activeTab = 1);
    },
    addToUserMovies(object) {
      const movieStore = useMovieStore();
      movieStore.movies.push({ ...object, isWatched: false });
      movieStore.activeTab = 1;
    },
  },
});*/

export const useSearchStore = defineStore("searchStore", () => {
  const movies = ref([]);

  const getMovies = async (search) => {
    const res = await fetch(`${url}${search}`);
    const data = await res.json();
    movies.value = data.results;
    const movieStore = useMovieStore();
    movieStore.activeTab === 1
      ? (movieStore.activeTab = 2)
      : (movieStore.activeTab = 1);
  };
  const addToUserMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
    movieStore.activeTab = 1;
  };
  return { movies, getMovies, addToUserMovies };
});
