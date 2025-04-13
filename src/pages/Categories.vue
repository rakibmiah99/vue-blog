<template>
  <div class="bg-gray-100 min-h-screen text-gray-800">
    <div class="container mx-auto px-4 py-10">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold text-center mb-10 text-blue-700">All Categories</h1>

      <!-- Category Grid -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
            v-for="category in categories"
            :key="category.id"
            class="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition"
        >
          <img
              :src="category.image"
              alt="Category"
              class="w-full h-40 object-cover brightness-75 group-hover:brightness-50 transition"
          />
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
            <h2 class="text-xl font-semibold">{{ category.name }}</h2>
            <p class="text-sm mt-1">{{ category.totalPosts }} Posts</p>
            <a href="#" class="mt-3 text-sm underline opacity-0 group-hover:opacity-100 transition">
              View Posts →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    id: 1,
    name: 'Technology',
    totalPosts: 12,
    image: 'https://source.unsplash.com/random/400x300?technology',
  },
  {
    id: 2,
    name: 'Health',
    totalPosts: 9,
    image: 'https://source.unsplash.com/random/400x300?health',
  },
  {
    id: 3,
    name: 'Travel',
    totalPosts: 6,
    image: 'https://source.unsplash.com/random/400x300?travel',
  },
  {
    id: 4,
    name: 'Business',
    totalPosts: 8,
    image: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Lifestyle',
    totalPosts: 7,
    image: 'https://source.unsplash.com/random/400x300?lifestyle',
  },
  {
    id: 6,
    name: 'Education',
    totalPosts: 10,
    image: 'https://source.unsplash.com/random/400x300?education',
  },
]
</script>
