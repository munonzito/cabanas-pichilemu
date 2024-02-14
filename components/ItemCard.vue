<template>
    <div>
        <NuxtLink :to="`/cabanas/` + name_id" class="w-full h-96 flex flex-col items-center relative">
            <div class="w-72 h-72 rounded-lg shadow-lg relative group lg:w-80">
                <img :src="photo" class="w-72 h-72 object-cover rounded-lg lg:w-80" alt=""/>
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 rounded-lg cursor-pointer">
                    <span class="text-white font-semibold">Ver más</span>
                </div>
                <div class="absolute flex bottom-0 right-0 m-5 p-1 bg-white rounded-full">
                    <img src="https://media.discordapp.net/attachments/1074418812641882162/1205502126898552832/blue_check.png?ex=65d89a58&is=65c62558&hm=1163d4287af6abe94e4be6f0b8e430c72b64ce3295d9a347f1121838cf75d19c&=&format=webp&quality=lossless&width=450&height=450" class="w-5 h-5" alt="Verificada"/>
                    <span class="text-xs ml-0.5 mt-0.5">Verificada</span>
                </div>
            </div>
            <div class="w-72 mt-2 lg:w-80">
                <h2 class="text-black font-semibold">{{ title }}</h2>
                <p class="text-gray-500">{{ description }}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    name_id: String,
    photo: String
})
</script>

<style lang="scss" scoped>

</style>