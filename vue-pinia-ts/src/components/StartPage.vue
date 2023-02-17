<template>
  <div class="mt-4">
    <v-img class="mx-auto" max-width="200px" src="src/assets/tv-movie.svg">
    </v-img>

    <v-card class="mx-auto" max-width="600">
      <v-text-field class="ma-4" :rules="rules"></v-text-field>
      <v-img
        class="align-end text-white"
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title>Movie:</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

      <v-card-text>
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange"> Watch </v-btn>

        <v-btn color="orange"> unwatched </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "start-page",
};
</script>

<style scoped></style>
