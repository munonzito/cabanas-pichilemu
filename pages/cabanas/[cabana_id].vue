<template>
    <div class="w-full flex flex-col">
        <div class="h-16 bg-white flex items-center px-5 shadow-lg">
            <Icon name="material-symbols:arrow-back-ios-new" size="20px" class="text-black"/>
            <h1 class="text-black font-semibold text-2xl pl-5">Cabañas en Pichilemu</h1>
        </div>
        <div class="w-full flex flex-col items-center justify-center p-10">
            <div class="w-full lg:w-[1024px]">
                <div class="flex items-center justify-center w-full">
                    <img class="rounded-lg w-[600px] h-[392px] shadow-lg mr-2 object-cover  lg:rounded-none lg:rounded-l-lg" src="https://lh3.googleusercontent.com/p/AF1QipM8VFcDogp1OKZ0gpHw3u_kbPu2AGL7J5ou4zTg=s1360-w1360-h1020" />
                    <div class="hidden grid-cols-2 gap-2 lg:grid">
                        <img class="h-48 shadow-lg object-cover" src="https://lh3.googleusercontent.com/p/AF1QipM8VFcDogp1OKZ0gpHw3u_kbPu2AGL7J5ou4zTg=s1360-w1360-h1020" />
                        <img class="h-48 shadow-lg object-cover rounded-tr-lg" src="https://www.brisasdelmarpichilemu.cl/slide/10.jpg" />
                        <img class="h-48 shadow-lg object-cover" src="https://lh3.googleusercontent.com/p/AF1QipM8VFcDogp1OKZ0gpHw3u_kbPu2AGL7J5ou4zTg=s1360-w1360-h1020" />
                        <img class="h-48 shadow-lg object-cover rounded-br-lg" src="https://lh3.googleusercontent.com/p/AF1QipM8VFcDogp1OKZ0gpHw3u_kbPu2AGL7J5ou4zTg=s1360-w1360-h1020" />
                    </div>
                </div>
                <h2 class="text-black font-semibold text-2xl mt-5">Cabañas Brisas del Mar</h2>
                <div class="flex items center my-2">
                    <img class="w-6 h-6" src="https://media.discordapp.net/attachments/1074418812641882162/1205502126898552832/blue_check.png?ex=65d89a58&is=65c62558&hm=1163d4287af6abe94e4be6f0b8e430c72b64ce3295d9a347f1121838cf75d19c&=&format=webp&quality=lossless&width=450&height=450" alt=""/>
                    <span class="text-md ml-0.5">Verificada</span>
                </div>
                <p class="text-gray-500">Cabañas equipadas a 5 minutos de la Playa La Caletilla</p>
                <!-- divider-->
                <div class="border-b-2 border-gray-200 my-5"></div>
                <!-- Ubicación y Mapa -->
                <div class="">
                    <h2 class="text-black font-semibold text-2xl my-5">Ubicación</h2>
        <iframe class="w-full h-96 lg:w-[1024px]" style="border:0" Loading="lazy" allowfullscreen
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc5Ud1WFXYZYRO5Ygo4TCXIA&key=AIzaSyB6YZIeL0Esj8PUgNSXx0qBpAg1kVkYTO4"></iframe>
                </div>  
            </div>
            <div>
            </div>       
        </div>
       
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>