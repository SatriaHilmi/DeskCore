<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-white via-white to-blue-400 justify-center">

    <!-- <div v-if="isOpen" @click="toggleSidebar" class="fixed inset-0 bg-black/30 bg-opacity-50 z-40 transition-opacity">
    </div>


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

    <div class="p-4">
      <Button label="Menu" @click="toggleSidebar"
        class="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors cursor-pointer">
        <i class="pi pi-spin pi-cog" style="font-size: medium"></i>
      </Button>
    </div> -->
    <nav class="flex items-center p-5 bg-white shadow-md z-50 justify-between">
      <div class="flex card items-center">
        <Button type="button" icon="pi pi-spin pi-cog" style="font-size: 2vmax" @click="toggle($event)" rounded />

        <Popover ref="op" class="p-popover">
          <div class="p-4">
            <p class="font-medium mb-2">Hello Popover</p>
            <p class="text-sm text-surface-500 dark:text-surface-400">Yeayy</p>
          </div>
        </Popover>
      </div>

      <div class="flex space-x-4 justify-center">
        <router-link to="/" class="text-blue-600 font-bold hover:text-blue-400 underline"
          active-class="font-bold text-blue-800" exact-active-class="font-bold text-blue-800">Home</router-link>
        <router-link to="/about" class="text-blue-600 font-bold hover:text-blue-400 underline"
          active-class="font-bold text-blue-800" exact-active-class="font-bold text-blue-800">About</router-link>
      </div>

      <div class="flex items-center">
        <p>logo</p>
      </div>
    </nav>

    <main class="flex-1 mx-auto max-w-7xl p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import Button from './volt/Button.vue'
// import Popover from './volt/Popover.vue'
// import { CakeIcon } from '@heroicons/vue/24/solid'
import Button from './volt/Button.vue';
import Popover from './volt/Popover.vue';

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
