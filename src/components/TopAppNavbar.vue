<template>

  <div class="relative left-[50px]  w-[90%] md:w-[80%] lg:w-[80%] lg:gap-[300px] xl:gap-[200px] flex justify-between">
    <div class="hidden md:flex logoType w-[10%] md:w-[10%] flex items-center" >
      <h1 class="text-white font-bold">Ozgeshe</h1>
    </div>
    <nav class="navbar w-[90%]  h-[100px] flex items-center hidden sm:flex ">
      <ul class="w-[100%] flex flex-row justify-between text-white">
        <li class="">
          <router-link  to="/home" aria-label="" class="nav-link">
          <p>
            Главная
          </p>
          <i class="icon-home text-white" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" >
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
         </i>
          </router-link>
        </li>

        <li>
            <router-link to="/favourite" aria-label="" class="nav-link" >
              <p>
                Избранное
              </p>
              <i class="icon-cart text-white" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </i>
            </router-link>
        </li>

        <li>
            <router-link to="" aria-label="" class="nav-link">
              <p>
                Корзина
              </p>
              <i class="icon-cart text-white"  >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </i>
            </router-link>
          </li>
        <li>

      <router-link to="" aria-label="" class="nav-link">
        <p>
          Профиль
        </p>
        <i class="icon-user text-white" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </i>
      </router-link>
    </li>
  </ul>
    </nav>
  </div>
</template>

<style scoped>
    .nav-link{
      display: flex;
      flex-direction: row;
      gap: 10px;
    }


</style>

<script setup>
</script>
