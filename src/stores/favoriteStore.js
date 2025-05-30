import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('favouriteProducts', () => {
  const favouritesList = ref([])

  let checkFavourites  = (product) => {

    if(!favouritesList.value.some(p=> p.id === product.id)){
      favouritesList.value.push(product);

    } else{
      favouritesList.value = favouritesList.value.filter(p => p.id !== product.id )
    }

  }

  const isFavorite = (product) => {
    return favouritesList.value.some(p => p.id === product.id);
  }

  return {
    isFavorite,
    checkFavourites,
    favouritesList,
  }




})
