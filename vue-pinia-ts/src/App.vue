<template>
  <v-theme-provider theme="dark">
    <v-app>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
});
</script>
