<!-- components/Sidebar.vue -->
<template>
    <div>
      <div :class="{'fixed inset-0 transform translate-x-0': isOpen, 'fixed inset-0 transform -translate-x-full': !isOpen}" class="transition-transform duration-300 bg-blue-700 text-white w-64 h-full z-20">
        <!-- Contenido de la Barra Lateral -->
        <a href="#about" class="block p-4 hover:bg-blue-800">Sobre Nosotros</a>
        <a href="#contact" class="block p-4 hover:bg-blue-800">Contacto</a>
        <button class="w-full text-left p-4 hover:bg-blue-800">Publicar Cabaña</button>
      </div>
  
      <!-- Fondo oscuro para cuando la barra lateral esté abierta -->
      <div @click="closeSidebar" v-if="isOpen" class="fixed inset-0 bg-black opacity-50 z-10"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: Boolean
    },
    emits: ['update:isOpen'],
    methods: {
      closeSidebar() {
        this.$emit('update:isOpen', false);
      }
    }
  };
  </script>
  