<template>
  <div class="h-[100vh] flex justify-center items-center" v-if="favouriteProductsList.length == 0">
      <h1 class="text-white">Добавьте товары в Избранное</h1>
    </div>

    <div v-else class="container-products w-[100%] flex justify-center">

      <div  class="w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <transition-group name="list">
      <div class="favourite-products w-[100%]" v-for="card in favouriteProductsList" :key="card.id" >
        <div class="fav-product w-[80%]">
          <img :src="card.images[0]" class="rounded-[15px] w-[100%] h-[100%]" alt="card-img">
          <div class="description-card flex flex-row justify-between">
            <div>
              <h4 class="text-white">{{ card.name }}</h4>
              <h3 class="text-white">{{card.price}}</h3>
            </div>
            <div>
              <font-awesome-icon :icon="favourite.isFavorite(card) ? ['fas', 'heart'] : ['far', 'heart']" class="pointer text-white fa-2x"  alt="heart-button" @click="favourite.checkFavourites(card)" />
            </div>

          </div>

          </div>
     </div>
    </transition-group>
    </div>

    </div>



</template>

<style scoped>
.list-move{
  transition: transform 0.5s;
}

.list-enter-active, .list-leave-active {
  transition: opacity 0.5s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
}
.list-enter-to, .list-leave-from {
  opacity: 1;
}

.description-card{
  margin-top: 10px;
}
.fav-product{
  margin-left: 10%;
}
.favourite-products{

  margin-top: 20px;
}

.container-products{
  margin-top: 50px;
}

</style>

<script setup>
import { computed } from 'vue';

import { useCounterStore } from '@/stores/favoriteStore';
const favourite = useCounterStore();


const favouriteProductsList = computed(()=> favourite.favouritesList);



</script>
