<!-- Sidebar.vue -->
<template>
  <div class="flex min-h-screen bg-gradient-to-b from-white to-blue-400">
    <!-- Overlay hitam -->
    <div v-if="isOpen" @click="toggleSidebar" class="fixed inset-0 bg-black/30 bg-opacity-50 z-40 transition-opacity">
    </div>

    <!-- Sidebar dengan animasi -->
    <div
      class="fixed top-0 left-0 w-64 h-full bg-gradient-to-br from-blue-400 to-white shadow-md z-50 transform transition-transform duration-300"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <ul class="p-4 space-y-2">
        <li><router-link to="/" class="rounded-btn hover:bg-base-200"
            active-class="text-blue-800 font-bold">Home</router-link>
        </li>
        <li><router-link to="/about" class="rounded-btn hover:bg-base-200"
            active-class="font-bold text-blue-800">About</router-link>
        </li>
      </ul>
    </div>

    <!-- Konten utama -->
    <div class="p-4">
      <Button label="Menu" @click="toggleSidebar"
        class="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors cursor-pointer">
        <i class="pi pi-spin pi-cog" style="font-size: medium"></i>
      </Button>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
// import { CakeIcon } from '@heroicons/vue/24/solid'

const isOpen = ref(false)

function toggleSidebar() {
  isOpen.value = !isOpen.value
}
</script>
