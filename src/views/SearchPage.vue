<template>
    <div class="container h-[100%] flex flex-row  justify-center w-[100%]">
      <div class="relative top-[100px] max-w-[500px] w-[80%]  border-b border-white flex flex-row justify-between">
          <input
            v-model="password"
            type="text"
            placeholder="Поиск...."
            class="h-[40px]   text-white placeholder-white focus:outline-none"
          />
          <button >
           <img :src="SearchIcon" class="w-[25px] h-[25px]" alt="search-icon">
          </button>
      </div>
    </div>
</template>

<script setup>
import SearchIcon from '@/assets/img/search-icon.png';
</script>
