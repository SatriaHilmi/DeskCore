<template>
    <div class="flex flex-col max-w-lvh relative overflow-hidden">
        <Card class="relative w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
            <template #header>
                <img alt="user header" class="w-full h-full object-cover shadow-md rounded-2xl"
                    src="/assets/PeopleCompany.jpg" />
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
// import Button from 'primevue/button'
</script>

<style scoped>
.custom-card-shape::before {
    content: "";
    position: absolute;
    background-color: white;
    /* Sesuaikan dengan warna latar card */
    z-index: 10;
}

/* .custom-card-shape::after {
    content: "";
    position: absolute;
    background-color: white;
    z-index: 10;
} */

/* Potongan kiri atas */
.custom-card-shape::before {
    top: 0;
    left: 0;
    width: 90px;
    height: 90px;
    clip-path: polygon(0 0, 100% 0, 0 100%);
}

/* Potongan kanan bawah */
/* .custom-card-shape::after {
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    clip-path: polygon(100% 100%, 0 100%, 100% 0);
} */
</style>