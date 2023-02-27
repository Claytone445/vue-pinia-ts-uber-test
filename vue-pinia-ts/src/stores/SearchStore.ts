import { defineStore } from "pinia";
import { useMovieStore } from "@/stores/MovieStore";
import { ref } from "vue";
import type Movie from "@/types/movie";

const url =
  "https:api.themoviedb.org/3/search/movie?api_key=25aaa15cb506af838b8a23910e9d8dd1&query=";

export const useSearchStore = defineStore("searchStore", () => {
  const movies = ref<Array<Movie>>([]);

  const getMovies = async (search: string): Promise<void> => {
    try {
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      movies.value = data.results;
    } catch (error: any) {
      console.log(error);
    }

    const movieStore = useMovieStore();
    movieStore.activeTab === 1
      ? (movieStore.activeTab = 2)
      : (movieStore.activeTab = 1);
  };
  const addToUserMovies = (object: Movie) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
    movieStore.activeTab = 1;
  };
  return { movies, getMovies, addToUserMovies };
});
