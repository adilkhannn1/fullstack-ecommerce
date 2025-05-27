<script setup>
import GoogleIcon from '@/components/icons/google.png'
</script>
<template>
  <div class="grid place-items-center gap-[10px]">
    <p class="text-white text-[14px]">Вы так же можете получить доступ с помощью</p>

    <button
      class="max-w-[500px] bg-white text-black w-[80%] h-[52px] flex flex-row justify-center items-center gap-[10px]"
    >
      <span>
        <img :src="GoogleIcon" alt="GoogleIcon" class="w-[30px] h-[30px]" />
      </span>
      <p>Вход Через Google</p>
    </button>
  </div>
</template>
