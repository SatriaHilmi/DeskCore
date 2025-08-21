<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-white via-white to-blue-400 justify-center">
    <nav class="flex items-center p-5 bg-white shadow-md z-50 justify-between">
      <div class="flex card items-center">
        <Button type="button" icon="pi pi-spin pi-cog" style="font-size: 2vmax" @click="toggle($event)" rounded />

        <Popover ref="op" class="p-popover">
          <div class="p-4">
            <p class="text-gray-600 mt-2">Toggle between light and dark mode.</p>
          </div>
        </Popover>
      </div>

      <div class="flex space-x-4 justify-center">
        <router-link to="/" class="text-blue-600 font-bold hover:text-blue-400" active-class="font-bold text-blue-800"
          exact-active-class="font-bold text-blue-800">Home</router-link>
        <router-link to="/case-study" class="text-blue-600 font-bold hover:text-blue-400"
          active-class="font-bold text-blue-800" exact-active-class="font-bold text-blue-800">Case Study</router-link>
      </div>

      <div class="flex items-center">
        <p>logo</p>
      </div>
    </nav>

    <main class="flex-1 justify-center">
      <!-- <div class="absolute inset-0 bg-[url('/assets/blue.jpg')] bg-cover bg-center opacity-10">
      </div> -->
      <router-view />
      <footer class="flex items-center justify-center p-2 bg-blue-600 text-white w-full sticky bottom-0 z-50">
        <p>© 2025 VistrionTech. All rights reserved.</p>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from './volt/Button.vue';
import Popover from './volt/Popover.vue';
// import { darkMode } from './composable/darkMode';

// const { isDark, toggleDarkMode } = darkMode();
const op = ref<InstanceType<typeof Popover> | null>(null)

const toggle = (event: MouseEvent) => {
  op.value?.toggle(event, event.currentTarget);
};
</script>

<style>
.p-popover {
  position: absolute;
  z-index: 1000;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>
