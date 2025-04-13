<script setup>
const blog = {
  title: 'How to Build a Beautiful Blog in Vue 3',
  author: 'Rabbil Hasan',
  date: 'April 12, 2025',
  readTime: '4 min',
  image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  content: [
    "Vue 3 is the modern JavaScript framework of choice for building user interfaces...",
    "In this article, we’ll walk through building a blog using Vue 3 and Tailwind CSS...",
    "You’ll learn how to design pages, use the Composition API, and make your blog beautiful."
  ],
  tags: ['vue3', 'tailwindcss', 'blog', 'frontend'],
}

const relatedPosts = [
  {
    id: 1,
    title: 'Why Tailwind is Loved by Developers',
    summary: 'Discover how Tailwind makes styling faster, easier and scalable.',
    image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    title: 'Vue 3 Composition API Explained',
    summary: 'A simple guide to understanding and using the Composition API in Vue 3.',
    image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
]
</script>


<template>
  <div class="bg-gray-100 min-h-screen text-gray-800">
    <div class="container mx-auto px-4 py-10 max-w-4xl">
      <!-- Title -->
      <h1 class="text-4xl font-bold mb-4 leading-snug">
        {{ blog.title }}
      </h1>

      <!-- Author & Date -->
      <div class="flex items-center space-x-4 text-sm text-gray-500 mb-6">
        <div>✍️ {{ blog.author }}</div>
        <div>📅 {{ blog.date }}</div>
        <div>⏱ {{ blog.readTime }} read</div>
      </div>

      <!-- Cover Image -->
      <img :src="blog.image" alt="Cover" class="rounded-lg mb-8 shadow-lg w-full max-h-[400px] object-cover" />

      <!-- Blog Content -->
      <div class="prose prose-lg max-w-none mb-10">
        <p v-for="(para, index) in blog.content" :key="index">{{ para }}</p>
      </div>

      <!-- Tags -->
      <div class="mb-10">
        <h3 class="font-semibold text-lg mb-2">Tags:</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in blog.tags" :key="tag" class="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
            #{{ tag }}
          </span>
        </div>
      </div>

      <!-- Related Posts -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Related Posts</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
              v-for="post in relatedPosts"
              :key="post.id"
              class="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <img :src="post.image" class="rounded-md mb-3" />
            <h4 class="font-bold text-lg mb-1">{{ post.title }}</h4>
            <p class="text-sm text-gray-600">{{ post.summary }}</p>
            <a href="#" class="text-blue-600 font-medium mt-2 inline-block hover:underline">Read More →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


