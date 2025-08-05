<template>
    <div class="flex-1">
        <div class="p-4 justify-center items-center text-center">
            <TypingEffect />
        </div>
        <div class="flex flex-col md:flex-row gap-10 items-center mt-10">
            <div class="max-w-md text-left">
                <h1 class="text-3xl font-bold text-blue-500">Incresed Your Business With Us</h1>
                <h2 class="text-2xl font-semibold text-black">Web & Mobile Apps</h2>
                <hr class="border-t-2 border-blue-400 w-64 mb-1 mt-1">
                <h3 class="font-semibold text-gray-500">Build & Manage Apps For You, Publish Major</h3>
                <h3 class="font-semibold text-gray-500">Platform Apps</h3>
            </div>
            <div class="mt-6">
                <Card />
            </div>
        </div>
        <hr class="border-t-2 border-blue-400 w-80 items-center mx-auto mt-10 mb-6">
        <div class="flex flex-col justify-center mt-5 items-center text-center mb-10 gap-3"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-10' }">
            <h1 class="font-bold text-blue-500 text-4xl">About</h1>
            <p class="text-semibold text-2xl text-gray-600 max-w-xl">Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.
                Veritatis illo obcaecati nesciunt unde quae magnam beatae, repellendus sapiente, officiis voluptates
                possimus soluta delectus provident. Esse eligendi neque vel fugit totam!</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import TypingEffect from '../components/TypingEffect.vue';
import Card from '../components/Card.vue';

</script>

<style scoped></style>