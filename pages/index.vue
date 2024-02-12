<template>
    <div class="w-full">
        <div class="h-24 flex flex-col items-center justify-between px-5 md:flex-row md:px-10 ">
    <!-- Logo e Información a la izquierda -->
    <div class="hidden md:flex items-center justify-center w-full md:w-max">
        <h1 class="font-semibold text-3xl">Cabañas en Pichilemu</h1>
    </div>
    
    <!-- Barra de Búsqueda al Centro -->
    <div class="absolute left-5 top-8">
            <!-- Sidebar-->
            <div class="flex md:hidden items-center">
                <Icon name="material-symbols:menu" size="30px" class="text-black"/>
            </div>
        </div>
    <div class="flex items-center justify-center w-full my-5 md:w-1/3">
        <div class="w-72 flex md:w-full items-center bg-white rounded-full px-5 py-2 shadow-lg border-2">
            <input type="text" placeholder="Buscar cabañas..." class="flex-grow px-4 rounded-l-full text-gray-700 leading-tight focus:outline-none">
            <button class="flex justify-center items-center w-10 h-10 min-w-10x bg-red-500 rounded-full p-2 hover:bg-red-600 focus:outline-none">
                <Icon name="material-symbols:search" size="20px" class="text-white"/>
            </button>
        </div>
</div>

    
    
    <!-- Navegación y Acciones a la derecha -->
    <div class="flex items-center">
        <nav class="hidden lg:flex lg:items-center lg:space-x-4">
            <a href="#about" class="hover:text-blue-300">Sobre Nosotros</a>
            <a href="#contact" class="hover:text-blue-300">Contacto</a>
            <button class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none">Publicar Cabaña</button>
        </nav>
        
    </div>
    
</div>
<div class="flex md:hidden items-center justify-center w-full md:w-max">
        <h1 class="font-semibold text-3xl">Cabañas en Pichilemu</h1>
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