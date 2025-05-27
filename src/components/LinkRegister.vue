<script setup></script>
<template>
  <div class="grid place-items-center w-[100%] gap-[10px] p-[10%]">
    <p class="text-white text-[14px]">Нет аккаунта?</p>
    <router-link to="/register" class="w-[100%] grid place-items-center">
      <button class="border border-white text-white w-[80%] max-w-[500px] h-[52px] cursor-pointer">
        Зарегиструйтесь
      </button>
    </router-link>
    <router-view></router-view>
  </div>
</template>
