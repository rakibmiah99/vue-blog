<script setup>
import TopNav from "@/components/TopNav.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <TopNav/>

    <router-view/>

    <!-- Footer -->
    <footer class="bg-white py-6 mt-12 shadow-inner">
      <div class="container mx-auto text-center text-gray-600 text-sm">
        © {{ new Date().getFullYear() }} My Blog. All rights reserved.
      </div>
    </footer>
  </div>
</template>

