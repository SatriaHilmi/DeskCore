<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow p-4 flex justify-center space-x-4">
      <router-link to="/" class="text-blue-600 hover:underline">Home</router-link>
      <router-link to="/about" class="text-blue-600 hover:underline">About</router-link>
    </nav>
    <router-view />
  </div>
</template>