import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useProductStore = defineStore('products', () => {
  const products = ref([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://67ca14a7102d684575c46d34.mockapi.io/api/products');
      const data = await res.json();
      products.value = data;

    }catch(error){
      console.error('Ошибка загрузки продуктов:', error);
    }
  };
  return { products, fetchProducts};
});


