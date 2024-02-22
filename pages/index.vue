<template>
    <div class="w-full">
        <div class="h-24 flex flex-col items-center justify-between px-5 md:flex-row md:px-10 ">
    <!-- Logo e Información a la izquierda -->
    <div class="hidden md:flex items-center justify-center w-full md:w-max">
        <h1 class="font-semibold text-3xl">Cabañas en Pichilemu</h1>
    </div>
    
    <!-- Barra de Búsqueda al Centro -->
    
            
    <div class="flex items-center justify-center w-full my-5 md:w-1/3">
        <!-- Sidebar-->
        <div class="flex md:hidden items-center mr-2">
                <Icon @click="toggleSidebar" name="material-symbols:menu" size="30px" class="text-black"/>
            </div>
        
        <div class="w-64 flex md:w-full items-center bg-white rounded-full px-5 py-2 shadow-lg border-2">
            <input type="text" placeholder="Buscar cabañas..." class="flex-grow w-20 px-4 rounded-l-full text-gray-700 leading-tight focus:outline-none">
            <button class="flex justify-center items-center w-10 h-10 min-w-10x bg-blue-600 rounded-full p-2 hover:bg-red-600 focus:outline-none">
                <Icon name="material-symbols:search" size="20px" class="text-white"/>
            </button>
        </div>
</div>
<Sidebar :isOpen="isSidebarOpen" @update:isOpen="isSidebarOpen = $event" />
    
    
    <!-- Navegación y Acciones a la derecha -->
    <div class="flex items-center">
        <nav class="hidden lg:flex lg:items-center lg:space-x-4">
            <a href="#about" class="hover:text-blue-500">Sobre Nosotros</a>
            <a href="#contact" class="hover:text-blue-500">Contacto</a>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none">Publicar Cabaña</button>
        </nav>
        
    </div>
    
</div>
    <!--Titulo Mobile-->
    <div class="flex md:hidden items-center justify-center w-full md:w-max">
        <h1 class="font-semibold text-2xl">Cabañas en Pichilemu</h1>
    </div>
       
        <div class="flex justify-center p-5">
            <div class="w-full xl:grid-cols-4 lg:grid-cols-2 md:grid md:grid-cols-2 md:gap-5 sm:flex sm:items-center sm:justify-center">
                <ItemCard v-for="item in items" :title="item.title" :name_id="item.name_id" :photo="item.photos[0]" :description="item.description.substring(0,100) + '...'"/>
            </div>
        </div>

    </div>
</template>

<script setup>
defineOgImageComponent('Nuxt', {
  headline: 'Portal',
  title: 'Cabañas Pichilemu 👋',
  description: 'Arrienda cabañas seguras y confiables en Pichilemu.',
})
const items = await $fetch('/api/cabanas/get_all')

//Sidebar
const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<style scoped>

</style>