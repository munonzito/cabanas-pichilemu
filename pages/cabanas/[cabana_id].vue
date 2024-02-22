<template>
    <div class="w-full flex flex-col">
        <div class="h-16 bg-white flex items-center px-5 shadow-lg">
            <Icon @click="$router.back()" name="material-symbols:arrow-back-ios-new" size="20px" class="text-black cursor-pointer"/>
            <h1 class="text-black font-semibold text-xl pl-5">Cabañas en Pichilemu</h1>
        </div>
        <!-- Mobile Images -->
        <div ref="scrollContainer" class="overflow-x-hidden lg:hidden" @mousedown="onMouseDown"
    @touchstart="onMouseDown" @click="handleCarrousel">
            <div class="flex items-center justify-start w-full lg:hidden">
                <img class="w-full h-72 rounded-lg shadow-lg mr-2 object-cover" :src="cabana.photos[0]" />
                <img class="w-full h-72 rounded-lg shadow-lg mr-2 object-cover" :src="cabana.photos[1]"/>
                <img class="w-full h-72 rounded-lg shadow-lg mr-2 object-cover" :src="cabana.photos[2]" />

            </div>
        </div>

        <div class="w-full flex flex-col items-center justify-center p-5">

            <!-- Desktop Images -->
            <div class="w-full lg:w-[1024px]">
                <div @click="handleCarrousel" class="flex items-center justify-center w-full">
                    <img class="hidden w-full h-72 rounded-lg lg:flex lg:w-[600px] lg:h-[392px] shadow-lg mr-2 object-cover  lg:rounded-none lg:rounded-l-lg" :src="cabana.photos[0]" />
                    
                    <div class="hidden grid-cols-2 gap-2 lg:grid">
                        <img class="h-48 shadow-lg object-cover" :src="cabana.photos[1]" />
                        <img class="h-48 shadow-lg object-cover rounded-tr-lg" :src="cabana.photos[2]" />
                        <img class="h-48 shadow-lg object-cover" :src="cabana.photos[3]" />
                        <img class="h-48 shadow-lg object-cover rounded-br-lg" :src="cabana.photos[4]" />
                    </div>
                </div>
                <h2 class="text-black font-semibold text-2xl mt-5"> {{ cabana.name }}</h2>
                <div class="flex items center my-2">
                    <img class="w-6 h-6" src="https://media.discordapp.net/attachments/1074418812641882162/1205502126898552832/blue_check.png?ex=65d89a58&is=65c62558&hm=1163d4287af6abe94e4be6f0b8e430c72b64ce3295d9a347f1121838cf75d19c&=&format=webp&quality=lossless&width=450&height=450" alt=""/>
                    <span class="text-md ml-0.5">Verificada</span>
                </div>
                <p class="text-gray-500">{{ cabana.description }}</p>
                
                <button @click="onWhatsapp" class="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none mt-5">
                    <Icon name="material-symbols:phone-android" size="20px" class="text-white mr-2"/>
                    Contacto
                </button>
                <!-- divider-->
                <div class="border-b-2 border-gray-200 my-5"></div>
                <!-- Ubicación y Mapa -->
                <div>
                    <h2 class="text-black font-semibold text-2xl my-5">Ubicación</h2>
        <iframe class="w-full h-96 lg:w-[1024px]" style="border:0" Loading="async" allowfullscreen

:src="'https://www.google.com/maps/embed/v1/place?q=place_id:' + cabana.google_maps_place_id + '&key=' + config.public.googleCloudApiKey"></iframe>
                </div>  
            
            
            </div>
            <div>
            </div>       
        </div>
        <div v-if="isCarrouselOpen" class="w-full fixed flex justify-center items-center h-full bg-black bg-opacity-50 p-0 md:p-5">
      
    <div ref="scrollContainer" class="w-full overflow-x-hidden relative bg-white rounded-lg" @mousedown="onMouseDown"
    @touchstart="onMouseDown">
            <div class="fixed px-5 py-2 rounded-full">
                <Icon @click="handleCarrousel" name="material-symbols:close" size="24px" class="text-black"/>
            </div>
            <div class="flex items-center justify-start w-max py-12 px-5">
                
                <img class="w-96 md:w-[800px] rounded-lg shadow-lg mr-2 object-cover" :src="cabana.photos[0]" />
                <img class="w-96 md:w-[800px] rounded-lg shadow-lg mr-2 object-cover" :src="cabana.photos[1]" />
                <img class="w-96 md:w-[800px] rounded-lg shadow-lg mr-2 object-cover" :src="cabana.photos[2]">
                <img class="w-96 md:w-[800px] rounded-lg shadow-lg mr-2 object-cover" :src="cabana.photos[3]" />
                <img class="w-96 md:w-[800px] rounded-lg shadow-lg mr-2 object-cover" :src="cabana.photos[4]" />
            </div>
        </div>
    </div>
      
  
  
    </div>
</template>

<script setup>
const { cabana_id } = useRoute().params;
const cabana = await $fetch('/api/cabanas/' + cabana_id,
);
const config = useRuntimeConfig();



const scrollContainer = ref(null);
const { startDragging } = useDragScroll();

const onMouseDown = (event) => {
  if (scrollContainer.value) {
    startDragging(event, scrollContainer.value);
  }
};
const onWhatsapp = () => {
    const phone = cabana.phone_number;
    const message = `Hola, vi un aviso en pichilemucabanas.cl sobre ${cabana.name} y me gustaría obtener más información.`;
    const uri = `https://wa.me/${phone}?text=${message}`;
    window.open(uri , '_blank');
};

//Preview Images
const isCarrouselOpen = ref(false);
const handleCarrousel = () => {
    isCarrouselOpen.value = !isCarrouselOpen.value;
};
</script>

<style scoped>

</style>