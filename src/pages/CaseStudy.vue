<template>
    <div class="flex-1 p-4 justify-center items-center text-center">
        <!-- <h1 class="text-2xl font-bold">Welcome to DeskCore About</h1> -->
        <!-- <router-link to="/" class="ml-4 text-blue-500 hover:underline">Go to Home</router-link> -->
        <section id="home" class="relative container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
                <div>
                    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-blue-500">Case
                        Study
                        &<br />Portofolio</h1>
                    <p class="mt-4 text-slate-600 max-w-xl">Explore selected projects and case studies that showcase our
                        problem-solving approach, from discovery to delivery.</p>
                </div>
                <div class="flex justify-center md:justify-end">
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                        alt="Hero" class="rounded-2xl shadow-lg w-full md:w-10/12 object-cover" />
                </div>
            </div>
        </section>
    </div>
    <hr class="border-t-2 border-blue-400 w-1/2 mx-auto items-center mb-5">
    <!-- <hr class="border-t-2 border-blue-400 w-70 items-center mb-5">
    <hr class="border-t-2 border-blue-400 w-50 items-center mb-5"> -->

    <!-- CASE STUDY -->
    <section id="case-study" class="border-y border-white">
        <div class="container mx-auto px-4 py-16 md:py-24">
            <div class="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-blue-500">Case Study</h2>
                    <p class="mt-2 text-slate-600">Real-world solutions delivered for our enterprise clients.</p>
                </div>
                <div class="flex items-center gap-2">
                    <label class="text-sm text-slate-600">Sort by:</label>
                    <select v-model="sortBy"
                        class="text-sm rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-300">
                        <option value="latest">Latest</option>
                        <option value="client">Client</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        </div>
    </section>


    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-10 lg:mx-20 mb-5">
        <article v-for="item in sortedCaseStudies" :key="item.id"
            class="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
            <div class="flex items-center gap-3 p-5">
                <img :src="item.logo" :alt="item.title + ' logo'"
                    class="h-10 w-10 rounded-lg object-contain border border-slate-100" />
                <div>
                    <h3 class="font-semibold">{{ item.title }}</h3>
                    <p class="text-xs text-slate-500">{{ item.client }}</p>
                </div>
            </div>
            <img :src="item.banner" :alt="item.title" class="w-full aspect-[16/10] object-cover" />
            <div class="p-5">
                <p class="text-sm text-slate-600 line-clamp-3">{{ item.excerpt }}</p>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// --- Mock Data Types ---
interface CaseStudyItem {
    id: number
    title: string
    client: string
    date: string // ISO date
    logo: string
    banner: string
    excerpt: string
}

// --- State ---
const sortBy = ref<'latest' | 'client' | 'title'>('latest')

// --- Sample dataset (replace with real content) ---
const caseStudies = ref<CaseStudyItem[]>([
    {
        id: 1,
        title: 'iFarms',
        client: 'PT Pupuk Indonesia',
        date: '2024-12-12',
        logo: 'https://dummyimage.com/64x64/EEF2FF/1E293B&text=IF',
        banner: 'https://images.unsplash.com/photo-1599050751795-7711a160b1b3?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Smart agriculture platform optimizing fertilizer distribution, forecasting, and real-time field monitoring.'
    },
    {
        id: 2,
        title: 'PICO',
        client: 'PT Petrokimia Gresik',
        date: '2024-10-02',
        logo: 'https://dummyimage.com/64x64/E0E7FF/0F172A&text=PI',
        banner: 'https://images.unsplash.com/photo-1546549039-87bf7d6f1f75?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Operational command dashboard enabling data-driven decisions across plants and warehouses.'
    },
    {
        id: 3,
        title: 'PKT MASTER',
        client: 'PT Pupuk Kalimantan Timur',
        date: '2024-08-20',
        logo: 'https://dummyimage.com/64x64/DBEAFE/111827&text=PK',
        banner: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Enterprise resource planning suite for asset tracking, maintenance scheduling, and analytics.'
    },
    {
        id: 4,
        title: 'DIMAS',
        client: 'PT Pupuk Indonesia',
        date: '2024-05-11',
        logo: 'https://dummyimage.com/64x64/CCE0FF/0B1220&text=DM',
        banner: 'https://images.unsplash.com/photo-1581091014534-8f9e0b1b5bec?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Digital monitoring and assurance system integrating IoT telemetry with compliance workflows.'
    },
    {
        id: 5,
        title: 'PORTAL INTRANET',
        client: 'PT Pupuk Kalimantan Timur',
        date: '2024-03-23',
        logo: 'https://dummyimage.com/64x64/E2E8F0/0F172A&text=IN',
        banner: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Modern intranet portal focusing on employee productivity, search, and knowledge sharing.'
    },
    {
        id: 6,
        title: 'PUPUK INDONESIA MOBILE',
        client: 'PT Pupuk Indonesia',
        date: '2024-01-15',
        logo: 'https://dummyimage.com/64x64/F3F4F6/1F2937&text=PI',
        banner: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Mobile app providing access to fertilizer distribution, field data, and operational insights.'
    }
])

// --- Computed ---
const sortedCaseStudies = computed(() => {
    const arr = [...caseStudies.value]
    if (sortBy.value === 'latest') return arr.sort((a, b) => +new Date(b.date) - +new Date(a.date))
    if (sortBy.value === 'client') return arr.sort((a, b) => a.client.localeCompare(b.client))
    return arr.sort((a, b) => a.title.localeCompare(b.title))
})

</script>

<style scoped></style>