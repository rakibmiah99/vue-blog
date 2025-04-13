<script setup>
const categoryTitle = 'Technology';

const categoryPosts = [
  {
    id: 1,
    title: 'The Rise of AI in Modern Tech',
    summary: 'A brief overview of how artificial intelligence is transforming industries.',
    image: 'https://source.unsplash.com/random/400x200?ai',
  },
  {
    id: 2,
    title: 'Why Vue 3 is Great for Beginners',
    summary: 'Learn why Vue 3 is the most beginner-friendly frontend framework.',
    image: 'https://source.unsplash.com/random/400x200?vue',
  },
  {
    id: 3,
    title: '10 Tools Every Developer Should Use',
    summary: 'These productivity tools will supercharge your development workflow.',
    image: 'https://source.unsplash.com/random/400x200?code',
  },
]
</script>



<template>
  <div class="bg-gray-100 min-h-screen text-gray-800">
    <div class="container mx-auto px-4 py-10">
      <!-- Category Header -->
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold mb-2 text-blue-700">{{ categoryTitle }}</h1>
        <p class="text-gray-600 text-lg">Explore the latest articles under "{{ categoryTitle }}"</p>
      </div>

      <!-- Blog Cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
            v-for="post in categoryPosts"
            :key="post.id"
            class="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
        >
          <img :src="post.image" alt="Blog Image" class="rounded-md mb-4 h-48 w-full object-cover" />
          <h4 class="text-xl font-semibold mb-2">{{ post.title }}</h4>
          <p class="text-gray-600 mb-3 text-sm">{{ post.summary }}</p>
          <a href="#" class="text-blue-600 hover:underline font-medium text-sm">Read More →</a>
        </div>
      </div>

      <!-- Optional Pagination -->
      <div class="mt-10 text-center">
        <button class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Load More Posts
        </button>
      </div>
    </div>
  </div>
</template>

