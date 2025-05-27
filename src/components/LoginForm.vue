
<template>
  <form action="" class="flex flex-col w-[100%] text-[16px]"  @submit.prevent="isUserCheck">
    <div class="flex flex-col items-center">
      <h1 class="text-white text-center text-[20px] font-bold">Вход</h1>
      <div class="flex flex-col items-center w-[100%] gap-[15px]">
        <input
          v-model="email"
          type="email"
          placeholder="Email*"
          class="h-[40px] placeholder-white focus:outline-none border-b w-[80%] border-white pb-[9px] text-white max-w-[500px]"
        />
        <div class="w-[80%]">
          <p v-if="emailIsWarn" class="text-red-400 text-[14px]">Email is not existed!</p>
        </div>
        <input

          v-model="password"
          type="password"
          placeholder="Password*"
          class="h-[40px] placeholder-white focus:outline-none border-b w-[80%] border-white pb-[9px] text-white max-w-[500px]"
        />
        <div class="w-[80%] max-w-[500px]">
          <p v-if="passwordIsWarn" class="text-red-400 text-[14px]">Your password is wrong!</p>
        </div>


      </div>
    </div>
    <div class="w-[100%] flex justify-center">
      <div class="w-[80%] max-w-[500px]">
        <router-link to="/forget" class="text-gray-200 text-[14px] relative top-[10px]"
          >Забыли пароль</router-link
        >
        <router-view> </router-view>
      </div>
    </div>
    <div class="w-[100%] flex justify-center">
      <button

        type="submit"
        class="max-w-[500px] flex justify-center items-center text-black h-[52px] relative top-[30px] border-[1px] border-white text-[16px] bg-[white] w-[80%]"
      >
        Войти в Аккаунт
      </button>
    </div>
  </form>
</template>



<script setup>
 import { useRouter } from 'vue-router';
 import { ref} from 'vue';
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  let emailIsWarn = ref(false);
  let passwordIsWarn = ref(false);
  const loginUser = async () => {
    const response = await fetch('https://67ca14a7102d684575c46d34.mockapi.io/api/users');
    const data = await response.json();
    const userEmail = data.some(userEmail=> userEmail.email === email.value);
    const userPassword = data.some(UserPassword=> UserPassword.password === password.value)
    return {userEmail, userPassword};
  }

  const isUserCheck = async()=>{
    const isEmailExisted = await loginUser();

    if(!isEmailExisted.userEmail){
      alert('There is no account by this Email!');
      emailIsWarn.value = true;
      passwordIsWarn.value = false;
      return;
    }


    if(isEmailExisted.userEmail && !isEmailExisted.userPassword){
      alert(`Your password isn't correct!`);
      passwordIsWarn.value = true;
      emailIsWarn.value = false;
      return;
    }


    if(isEmailExisted.userEmail && isEmailExisted.userPassword){
      alert('Login successfull!');
      router.push('/home')
      return;
    }
    alert('You have to first register your account!');
  }


</script>
