
<template>
  <form action="" class="flex flex-col w-[100%] text-[16px]" @submit.prevent="submitForm">
    <div class="w-[100%] flex flex-col items-center">
      <h1 class="text-white text-center text-[20px] font-bold">Регистрация</h1>
      <div class="flex flex-col items-center w-[100%] gap-[15px]">
        <input
          type="email"
          placeholder="Email*"
          class="h-[40px] placeholder-white focus:outline-none border-b w-[80%] border-white pb-[9px] text-white max-w-[500px]"
          v-model="email"
        />
        <div class="validText w-[80%] max-w-[500px]">
          <p v-if="!isEmailValid && email" class="text-red-400 text-[14px]">Your email must be example@gmail.com </p>
        </div>
        <input
          type="password"
          placeholder="Password*"
          class="h-[40px] placeholder-white focus:outline-none border-b w-[80%] border-white pb-[9px] text-white max-w-[500px]"
          v-model="password"
          />
          <div class="w-[80%]  max-w-[500px]">
            <p v-if="password && !isPasswordValid" class="text-[14px] text-red-400">Your password must contain 1 uppercase, 1 lowercase, and 1 number</p>
          </div>
        <input
          type="password"
          placeholder="Подтвердите пароль"
          class="h-[40px] placeholder-white focus:outline-none border-b w-[80%] border-white pb-[9px] text-white max-w-[500px]"
          v-model="confirmPassword"
          />
          <div class="w-[80%]  max-w-[500px]">
            <p class="text-[14px] text-red-400" v-if="!isConfirmPasswordValid && confirmPassword">Your password must match the password</p>
          </div>
      </div>
    </div>

    <div class="w-[100%] flex justify-center">
      <button
        type="submit"
        class="max-w-[500px] flex justify-center items-center text-black h-[52px] relative top-[30px] border-[1px] border-white text-[16px] bg-[white] w-[80%]"
        v-on:click="registerUser"
        >
        Зарегистрироваться
      </button>
    </div>
  </form>
</template>


<style scoped>
@media screen and (min-width: 768px) {

}
</style>

<script setup>
  import { ref, computed} from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');

  const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  const isEmailValid = computed(() => emailPattern.test(email.value));

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const isPasswordValid = computed(()=> passwordPattern.test(password.value));

  const isConfirmPasswordValid = computed(()=> password.value == confirmPassword.value);






  const registerAccount = async () => {
  try{
    const response = await fetch('https://67ca14a7102d684575c46d34.mockapi.io/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });


    const data = await response.json();
    console.log(data);
    alert('You are successfully registered!');
    email.value='';
    password.value='';
    confirmPassword.value='';
  }catch(error){
    console.log(error),
    alert('You have some error, please later!')
  }
}


async function submitForm(){

  const checkTheUserAcc =  await isEmailAlreadyExisted();

  if(isEmailValid.value && isPasswordValid.value && isConfirmPasswordValid.value){
    if(checkTheUserAcc){
      alert('This account is already existed! Try another account!');
    }else{
      registerAccount();
      router.push('/home');
      return;
    }
  }else{
    alert('You need to fill it correct!')
  }
}


const isEmailAlreadyExisted = async ()=>{
  const response =  await fetch('https://67ca14a7102d684575c46d34.mockapi.io/api/users');
  const data = await response.json();
  return data.some(user=> user.email === email.value);
}




</script>
