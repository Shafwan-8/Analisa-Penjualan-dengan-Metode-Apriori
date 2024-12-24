<template>
  <Sidebar />

  <div id="main">
    <Header />

    <RouterView />

    <Footer />
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, nextTick } from "vue";

onMounted(() => {
  compiledApp();
});
</script>
