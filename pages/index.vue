<template>
    <div class="w-full">
        <div class="h-16 bg-blue-500 flex items-center justify-center">
            <h1 class="text-white font-semibold text-2xl">Cabañas en Pichilemu</h1>
        </div>
       
        <div class="flex justify-center p-5">
            <div class="w-full lg:grid lg:grid-cols-4 lg:gap-5 md:grid md:grid-cols-2 md:gap-5 sm:flex sm:items-center sm:justify-center">
                <ItemCard v-for="item in items" :title="item.title" :photo="item.photo" :description="item.description"/>
            </div>
        </div>

    </div>
</template>

<script setup>
const items = [
    {
        "title": "Cabañas Brisas del Mar",
        "description": "Cabañas equipadas a 5 minutos de la playaaaaaaaaa",
        "photo":"https://lh3.googleusercontent.com/p/AF1QipM8VFcDogp1OKZ0gpHw3u_kbPu2AGL7J5ou4zTg=s1360-w1360-h1020"
    },
    {
        "title": "Cabañas San Nicolás",
        "description": "Cabañas equipadas a 5 minutos de la playa",
        "photo":"https://www.cabanassannicolas.cl/img/caba61.jpg"
    },
    {
        "title": "Cabañas Brisas del Mar",
        "description": "Cabañas equipadas a 5 minutos de la playa",
        "photo":"https://lh3.googleusercontent.com/p/AF1QipM8VFcDogp1OKZ0gpHw3u_kbPu2AGL7J5ou4zTg=s1360-w1360-h1020"
    },
    {
        "title": "Cabañas Brisas del Mar",
        "description": "Cabañas equipadas a 5 minutos de la playa",
        "photo":"https://lh3.googleusercontent.com/p/AF1QipM8VFcDogp1OKZ0gpHw3u_kbPu2AGL7J5ou4zTg=s1360-w1360-h1020"
    },
    {
        "title": "Cabañas Brisas del Mar",
        "description": "Cabañas equipadas a 5 minutos de la playa",
        "photo":"https://lh3.googleusercontent.com/p/AF1QipM8VFcDogp1OKZ0gpHw3u_kbPu2AGL7J5ou4zTg=s1360-w1360-h1020"
    },
    {
        "title": "Cabañas Brisas del Mar",
        "description": "Cabañas equipadas a 5 minutos de la playa",
        "photo":"https://lh3.googleusercontent.com/p/AF1QipM8VFcDogp1OKZ0gpHw3u_kbPu2AGL7J5ou4zTg=s1360-w1360-h1020"
    }   
]
</script>

<style scoped>

</style>