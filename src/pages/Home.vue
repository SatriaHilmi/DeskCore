<template>
    <div class="p-4 justify-center items-center text-center">
        <TypingEffect />
    </div>
    <div class="flex flex-col md:flex-row gap-10 items-center mt-10 justify-center">
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
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
        <h1 class="font-bold text-blue-500 text-4xl">About</h1>
        <p class="text-semibold text-xl text-gray-600 max-w-xl">Lorem ipsum dolor sit amet consectetur, adipisicing
            elit.
            Veritatis illo obcaecati nesciunt unde quae magnam beatae, repellendus sapiente, officiis voluptates
            possimus soluta delectus provident. Esse eligendi neque vel fugit totam!</p>
    </div>
    <h1 class="flex justify-center font-bold text-blue-500 text-4xl items-center mb-5"
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
        Our Services</h1>
    <div class="card mx-4 md:mx-10 lg:mx-20 mb-10"
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
        <Splitter style="height: auto" class="mb-5 border-none">
            <!-- Panel Web -->
            <SplitterPanel class="flex flex-col md:flex-row items-center justify-center text-center p-4">
                <img src="/assets/Laptop.png" alt="PC"
                    class="object-contain w-full md:w-1/2 h-64 md:h-full rounded-lg" />
                <div class="mt-4 md:mt-0 md:ml-6 md:w-1/2">
                    <h1 class="text-2xl mb-2 text-blue-500 font-bold">Web Development</h1>
                    <p>
                        Want to share your business with the whole world?
                        Or maybe build a system your team can use from anywhere, anytime?
                        Why not do both? Tell us what you need — we’ll make it happen.
                    </p>
                </div>
            </SplitterPanel>

            <!-- Panel App -->
            <SplitterPanel class="flex flex-col md:flex-row items-center justify-center text-center p-4">
                <img src="/assets/Mobile.png" alt="Mobile"
                    class="object-contain w-full md:w-1/2 h-64 md:h-full rounded-lg" />
                <div class="mt-4 md:mt-0 md:ml-6 md:w-1/2">
                    <h1 class="text-2xl mb-2 text-blue-500 font-bold">App Development</h1>
                    <p>
                        A busy lifestyle should never hold back your business growth.
                        With our experienced team, you can seamlessly manage, monitor, and expand your business
                        right from your mobile device. Full control, anytime, anywhere, right in the palm of your hand.
                    </p>
                </div>
            </SplitterPanel>
        </Splitter>
    </div>

    <h1 class="flex font-bold text-blue-500 text-4xl mb-5 md:mx-10 lg:mx-20"
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
        Case Study</h1>
    <div class="card mb-10 md:mx-10 lg:mx-20"
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
        <Stepper v-model="active" class="w-full">
            <StepItem v-for="(item, index) in CaseStudies" :key="item.id" :value="index + 1">
                <Step class="text-blue-500 font-semibold">{{ item.title }}</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                            <img :src="item.banner" alt="salon" class="w-full h-full object-contain">
                        </div>
                        <div class="flex flex-col items-start mt-4">
                            <p class="text-sm text-gray-500">{{ item.client }}</p>
                            <p class="text-xs text-gray-400">{{ new Date(item.date).toLocaleDateString() }}</p>
                            <p class="text-sm text-gray-500">{{ item.excerpt }}</p>
                        </div>
                    </div>
                    <div class="flex py-6 gap-2">
                        <Button v-if="index < CaseStudies.length - 1" label="Next"
                            @click="activateCallback((index + 2))" />
                        <SecondaryButton v-if="index > 0" label="Back" @click="activateCallback((index))" />
                    </div>
                </StepPanel>
            </StepItem>
        </Stepper>
    </div>

    <div class="bg-cover bg-center mt-20 flex justify-center p-5">
        <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-6 max-w-6xl w-full">
            <!-- Kolom kiri -->
            <div class="md:text-left flex flex-col items-center md:items-start justify-center">
                <h1 class="text-3xl md:text-6xl font-bold mb-5 text-blue-600">
                    Contact Us
                </h1>
                <p class="mb-8">
                    We’d be delighted to hear from you! Just drop us a message via Email or WhatsApp, and we’ll respond
                    as soon as we can.
                </p>
                <div class="flex items-center gap-4 mb-4">
                    <i
                        class="pi pi-whatsapp text-3xl text-green-600 font-bold border-2 border-green-600 p-2 rounded-full"></i>
                    <h1 class="text-lg text-green-600">+6285755164454</h1>
                    <h3>|</h3>
                    <h1 class="text-lg text-green-600">+6282363159160</h1>
                </div>
                <div class="flex items-center gap-4 mb-4">
                    <i class="pi pi-envelope text-3xl text-black font-bold p-2"></i>
                    <h1 class="text-lg">Vistriontech@gmail.co.id</h1>
                </div>
            </div>

            <!-- Kolom kanan -->
            <div class="flex items-center justify-center">
                <img src="/assets/Contact.png" alt="contact" class="object-cover">
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import TypingEffect from '../components/TypingEffect.vue';
import Card from '../components/Card.vue';
import Button from '../volt/Button.vue';
// import SecondaryButton from '../volt/SecondaryButton.vue';
import Splitter from '../volt/Splitter.vue';
import SplitterPanel from 'primevue/splitterpanel';
import Stepper from '../volt/Stepper.vue';
import Step from '../volt/Step.vue';
import StepPanel from '../volt/StepPanel.vue';
import StepItem from '../volt/StepItem.vue';
import SecondaryButton from '../volt/SecondaryButton.vue';

interface CaseStudyItem {
    id: number;
    title: string;
    client: string;
    date: string;
    logo: string;
    banner: string;
    excerpt: string;
}

const active = ref(1);

const CaseStudies = ref<CaseStudyItem[]>([
    {
        id: 1,
        title: 'iFarms',
        client: 'PT. iFarms Indonesia',
        date: '2023-01-15',
        logo: '/assets/ifarms-logo.png',
        banner: '/assets/contact.png',
        excerpt: 'A comprehensive farm management system that optimizes agricultural processes.'
    },
    {
        id: 2,
        title: 'Retail Analytics Suite',
        client: 'Retail Corp',
        date: '2023-02-20',
        logo: '/assets/retail-logo.png',
        banner: '/assets/retail-banner.jpg',
        excerpt: 'An analytics platform that provides insights into retail operations and customer behavior.'
    },
    {
        id: 3,
        title: 'Logistics Optimizer',
        client: 'Logistics Solutions',
        date: '2023-03-10',
        logo: '/assets/logistics-logo.png',
        banner: '/assets/logistics-banner.jpg',
        excerpt: 'A logistics management system that streamlines supply chain operations and reduces costs.'
    }
]);

</script>

<style scoped></style>