<script setup>

</script>

<template>
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">My Blog</h1>
        <nav class="space-x-2">
          <router-link :to="{name: 'home'}" class="hover:text-blue-600 cursor-pointer" >Home</router-link>
          <router-link :to="{name: 'categories'}" class="hover:text-blue-600 cursor-pointer">Categories</router-link>
          <router-link to="#" class="hover:text-blue-600 cursor-pointer">About</router-link>
          <router-link to="#" class="hover:text-blue-600 cursor-pointer">Contact</router-link>
        </nav>
      </div>
    </header>

</template>

<style scoped>

</style>