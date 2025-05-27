<template>
  <div class="h-[100vh] flex justify-center items-center" v-if="favouriteProductsList.length == 0">
      <h1 class="text-white">Добавьте товары в Избранное</h1>
    </div>

    <div v-else class="favourite-products grid grid-cols-2 gap-4">
      <div v-for="card in favouriteProductsList" :key="card.id">
        <div class="w-[80%] ">
          <img :src="card.images[0]" class="rounded-[15px]" alt="card-img">
          <div>
            <div>
              <h4 class="text-white">{{ card.name }}</h4>
              <h3 class="text-white">{{card.price}}</h3>
            </div>

        </div>
          </div>
     </div>
    </div>


</template>

<style scoped>
.favourite-products{
  margin-left: 10%;
  margin-top: 20px;
}
</style>

<script setup>
  import { useCounterStore } from '@/stores/favoriteStore';
  const favourite = useCounterStore();

  const favouriteProductsList = favourite.favouritesList;





</script>
