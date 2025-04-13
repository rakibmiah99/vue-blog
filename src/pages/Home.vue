
<script setup>
import TopNav from "@/components/TopNav.vue";

const posts = [
  {
    id: 1,
    title: "How to Start Blogging",
    summary: "Tips and tricks for beginners to start their blogging journey.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Why Vue 3 is Awesome",
    summary: "A quick overview of the new features in Vue 3.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips",
    summary: "Best practices for designing with Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 1,
    title: "How to Start Blogging",
    summary: "Tips and tricks for beginners to start their blogging journey.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Why Vue 3 is Awesome",
    summary: "A quick overview of the new features in Vue 3.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips",
    summary: "Best practices for designing with Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <!-- Hero Section -->
    <section class="bg-blue-50 py-12 text-center">
      <h2 class="text-4xl font-bold mb-4">Welcome to My Blog</h2>
      <p class="text-lg text-gray-600">Explore inspiring articles across multiple topics.</p>
    </section>

    <!-- Blog Posts -->
    <section class="container mx-auto px-4 py-8">
      <h3 class="text-2xl font-semibold mb-6">Latest Posts</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div
            v-for="post in posts"
            :key="post.id"
            class="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
        >
          <img :src="post.image" alt="Blog" class="rounded-md mb-4" />
          <h4 class="text-xl font-semibold mb-2">{{ post.title }}</h4>
          <p class="text-gray-600 mb-3">{{ post.summary }}</p>
          <router-link :to="{name: 'blog-details'}" class="text-blue-600 hover:underline font-medium">Read More →</router-link>
        </div>
      </div>
    </section>

  </div>
</template>

