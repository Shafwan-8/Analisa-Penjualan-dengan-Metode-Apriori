<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { computed, onMounted } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
