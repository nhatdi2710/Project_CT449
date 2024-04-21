<script>
import AppHeader from "@/components/AppHeader.vue";
import Thumbnail from "./components/Thumbnail.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    Thumbnail,
    AppFooter
  }
};
</script>

<template>
<div id="app">
  <AppHeader v-if="$route.path != '/login'" />

  <main class="container mt-4">
    <Thumbnail v-if="$route.path != '/login'" />
    <router-view />
  </main>

  <AppFooter />
</div>
</template>

<style>

</style>