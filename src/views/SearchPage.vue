<template>
    <div class="h-[100%] flex flex-col  justify-center w-[80%]">

      <div class="container w-[100%] h-[100%]">
        <div class="relative top-[100px] max-w-[500px] w-[100%]  border-b border-white flex flex-row justify-between">
          <input
            v-model="inputValue"
            type="text"
            placeholder="Поиск...."
            class="h-[40px]   text-white placeholder-white focus:outline-none"

            />
          <button >
           <img :src="SearchIcon" class="w-[25px] h-[25px]" alt="search-icon">
          </button>
      </div>

      <div class="relative top-[150px]">
        <div v-if="inputValue.length < 3" >
          <p class="text-white">Надо ввести как минимум три буквы!</p>
        </div>
        <div v-else-if="filteredSearchProducts == 0">
            <p class="text-white">Ничего не найдено</p>
        </div>
        <div v-else>
          <transition-group name="list">
            <div class="product-card" v-for="product in filteredSearchProducts" :key="product.id">
              <div class="flex flex-col gap-[10px]">
              <img :src="product.images[0]" alt="product-image">
              <div class="flex flex-row justify-between">
              <div>
                <h1 class="text-white">{{product.name}}</h1>
              <p class="text-white">{{ product.price }}
                </p>
              </div>
              <div>
                <font-awesome-icon :icon="favourite.isFavorite(product) ? ['fas', 'heart'] : ['far', 'heart']" class="pointer text-white fa-2x"  alt="heart-button" @click="favourite.checkFavourites(product)" />
              </div>
            </div>
          </div>
            </div>
          </transition-group>

        </div>

      </div>
      </div>






    </div>
</template>


<style scoped>
.product-card{
  margin-top: 25px;
}
.container{
  margin-left: 10%;
  padding-bottom: 300px;
}

.list-move{
  transition: transform 0.5s;
}
.list-enter-active, .list-leave-active{
  transition: opacity 0.5s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
}
.list-enter-to, .list-leave-from {
  opacity: 1;
}


</style>

<script setup>
import { ref, computed, onMounted } from 'vue';
import SearchIcon from '@/assets/img/search-icon.png';


const inputValue = ref('');
import { useCounterStore } from '@/stores/favoriteStore';
const favourite = useCounterStore();
import { useProductStore } from '@/stores/productStore';


onMounted(()=> {
  productStore.fetchProducts();
});


const productStore = useProductStore();
const products = computed(()=> productStore.products);




const filteredSearchProducts = computed(()=> {
  return products.value.filter(product => product.name.toLowerCase().includes(inputValue.value.toLocaleLowerCase()));
})





</script>
