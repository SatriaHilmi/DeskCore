<template>
    <div class="items-center justifiy-center">
        <h1 class="text-4xl font-bold bg-gradient-to-br from-blue-400 to-blue-800 text-transparent bg-clip-text">
            {{ displayText }} <span class="border-r-2 bg-blue-800 animate-pulse ml-1"></span>
        </h1>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const displayText = ref('');
const fullText = 'Welcome to Vistrion Tech!';
const speed = 100; // Speed in milliseconds

onMounted(() => {
    let i = 0;
    const type = () => {
        if (i < fullText.length) {
            displayText.value += fullText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    type();
})
</script>

<style scoped></style>