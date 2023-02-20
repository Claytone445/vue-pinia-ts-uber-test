import { defineStore } from "pinia";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [],
    activeTab: 2,
  }),
  getters: {
    watchedMovies() {
      return this.movies.filter((element) => element.isWatched);
    },
    amountMovies() {
      return this.movies.length;
    },
    checkWatched() {
      // const movieKeys = Object.values(this.movies);
      // let isWatchedOption = null;
      // for (let prop in movieKeys) {
      //   if (movieKeys[prop].isWatched === true) {
      //     isWatchedOption = movieKeys[prop].isWatched;
      //   }
      // }
      //
      // return isWatchedOption;
      return this.movies.isWatched;
    },
  },
  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },
    switchWatched(id) {
      const idx = this.movies.findIndex((el) => el.id === id);
      this.movies[idx].isWatched = !this.movies[idx].isWatched;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((element) => element.id !== id);
    },
  },
});
