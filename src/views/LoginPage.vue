<script setup>
import { ref } from 'vue'
const LoginImageUrl = ref('https://i.pinimg.com/736x/60/f4/6e/60f46e19d0ae2a65830e3a05e0fc0e4e.jpg')
import LoginForm from '@/components/LoginForm.vue'
import LinkToReg from '@/components/LinkRegister.vue'
import GoogleButton from '@/components/GoogleButton.vue'
</script>

<template>
  <main class="login-container relative w-[100%] h-screen bg-[#343740]">
    <div
      :style="{ backgroundImage: `url(${LoginImageUrl})` }"
      class="loginFormLeftSide absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
    ></div>
    <div class="loginFormRightSide top-[100px] relative">
      <div class="LoginFormFields top-[60px] relative z-10 w-[100%]">
        <LoginForm />
      </div>
      <div
        class="LinkToReg relative z-10 w-[100%] top-[180px] flex flex-col justify-center items-center"
      >
        <LinkToReg />
      </div>
      <div class="googleButton text-center relative z-10 w-[100%] top-[220px]">
      <GoogleButton />
      </div>
    </div>
  </main>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .LoginFormFields {
    top: 0px;
  }
  .login-container {
    display: flex;
    flex-direction: row;
  }
  .LinkToReg {
    top: 100px;
  }
  .googleButton {
    top: 150px;
  }

  .loginFormLeftSide {
    position: relative;
    width: 50%;
    opacity: 100%;
    height: 100%;
  }
  .loginFormRightSide {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
  }
}

@media screen and (min-width: 1024px) {
}
</style>
