<template>
    <div class="flex flex-col max-w-lvh custom-card-shape relative overflow-hidden">
        <Card>
            <template #header>
                <img alt="user header" class="w-full shadow-md rounded-2xl"
                    src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
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
    width: 60px;
    height: 60px;
    clip-path: polygon(0 0, 100% 0, 0 100%);
}

/* Potongan kanan bawah */
.custom-card-shape::after {
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    clip-path: polygon(100% 100%, 0 100%, 100% 0);
}
</style>