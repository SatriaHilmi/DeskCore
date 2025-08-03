<template>
  <div class="flex">
    <!-- Overlay -->
    <div v-if="isOpen" @click="toggleSidebar" class="fixed inset-0 bg-black/50 z-40 transition-opacity"></div>

    <!-- Sidebar -->
    <div class="fixed top-0 left-0 w-44 h-full bg-base-100 shadow z-50 transition-transform duration-300"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <ul class="menu p-4 space-y-2">
        <li><router-link to="/" class="rounded-btn hover:bg-base-200" active-class="font-bold">Home</router-link></li>
        <li><router-link to="/about" class="rounded-btn hover:bg-base-200" active-class="font-bold">About</router-link>
        </li>
      </ul>
    </div>

    <!-- Button to toggle sidebar -->
    <div class="p-4">
      <button @click="toggleSidebar" class="btn btn-circle btn-success">
        <CogIcon class="h-6 w-6" />
      </button>
    </div>

    <!-- Main content -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CogIcon } from '@heroicons/vue/20/solid';

const isOpen = ref(false);
function toggleSidebar() {
  isOpen.value = !isOpen.value;
}
</script>
