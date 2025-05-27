<script setup></script>
<template>
  <div class="grid place-items-center w-[100%] gap-[10px] p-[10%]">
    <p class="text-white text-[14px]">Имеется аккаунт?</p>
    <router-link to="/" class="w-[100%] grid place-items-center">
      <button class="border border-white text-white w-[80%] max-w-[500px] h-[52px] cursor-pointer">
        Войти
      </button>
    </router-link>
    <router-view></router-view>
  </div>
</template>
