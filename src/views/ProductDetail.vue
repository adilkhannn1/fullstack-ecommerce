  <template>
    <div v-if="cardDetail">

    <div class="w-[100%] text-white">
      <div class="w-[80] cardDetailProduct">
        <div class="w-[100%]">
        <img class="w-[100%] rounded-xl" :src="cardDetail.images[0]" alt="image" />
    </div>
    <div>

      <h1 class="cardName text-[22px] font-bold">{{ cardDetail.name }}</h1>
      <p class="cardTitleDescription font-bold text-[18px]">Описание</p>
      <p class="cardDescription">{{ cardDetail.description }}</p>
      <p class="colorTitle"><span class="font-bold">Цвет</span> - {{cardDetail.color}}</p>

      <div class="cardRating rating">
        <p class=" text-[18px] font-bold">Рейтинг</p>

        <div class="flex">
          <div>
           <p class=" text-[22px]"> {{cardDetail.rating}}</p>
          </div>
          <div class="flex">
            <svg class="w-[25px]" v-for="n in Math.floor(cardDetail.rating)" :key="n" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#ebff52"></path> </g></svg>
            <svg class="w-[25px]" v-if="cardDetail.rating - Math.floor(cardDetail.rating)>=0.5" fill="#fafd3f" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 276.901 276.901" xml:space="preserve" stroke="#fafd3f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M275.922,105.676c-2.353-7.24-8.612-12.517-16.146-13.611l-71.441-10.381l-31.95-64.737 c-3.369-6.826-10.322-11.148-17.935-11.148c-7.613,0-14.565,4.322-17.935,11.148L88.566,81.684L17.125,92.065 c-7.533,1.095-13.793,6.371-16.146,13.611s-0.391,15.188,5.062,20.502l51.695,50.391l-12.203,71.153 c-1.287,7.504,1.798,15.087,7.956,19.562c6.159,4.475,14.326,5.065,21.063,1.521l63.898-33.594l63.899,33.594 c2.927,1.539,6.121,2.298,9.305,2.298c4.146,0,8.273-1.288,11.758-3.819c6.159-4.475,9.243-12.059,7.956-19.562l-12.204-71.153 l51.696-50.39C276.312,120.864,278.274,112.916,275.922,105.676z M183.715,155.264c-4.714,4.595-6.865,11.215-5.752,17.703 l7.131,41.575l-37.337-19.629c-2.913-1.532-6.11-2.298-9.306-2.298V70.99l18.669,37.826c2.913,5.902,8.545,9.994,15.059,10.94 l41.743,6.065L183.715,155.264z"></path> </g></svg>
            <svg class="w-[25px]" v-for="k in Math.round(5 - cardDetail.rating)" :key="k" fill="#fff93d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 278.457 278.457" xml:space="preserve" stroke="#fff93d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M277.478,106.28c-2.353-7.24-8.611-12.517-16.146-13.611l-71.979-10.46l-32.19-65.224 c-3.369-6.826-10.321-11.148-17.935-11.148s-14.565,4.322-17.935,11.148l-32.19,65.224l-71.979,10.46 C9.591,93.763,3.332,99.039,0.979,106.28s-0.391,15.188,5.062,20.502l52.084,50.77L45.83,249.24 c-1.287,7.503,1.797,15.087,7.956,19.562c6.16,4.474,14.324,5.065,21.063,1.522l64.38-33.847l64.38,33.847 c2.926,1.538,6.121,2.297,9.305,2.297c4.146,0,8.273-1.288,11.758-3.819c6.159-4.475,9.243-12.059,7.956-19.562l-12.295-71.688 l52.084-50.77C277.868,121.468,279.83,113.52,277.478,106.28z M184.883,156.247c-4.714,4.594-6.865,11.214-5.752,17.702l7.222,42.11 l-37.817-19.882c-2.913-1.531-6.109-2.297-9.307-2.297s-6.394,0.766-9.307,2.297L92.104,216.06l7.222-42.11 c1.113-6.488-1.038-13.108-5.752-17.702l-30.595-29.822l42.281-6.145c6.515-0.946,12.146-5.038,15.059-10.94l18.909-38.313 l18.909,38.313c2.913,5.902,8.544,9.994,15.059,10.94l42.281,6.145L184.883,156.247z"></path> </g></svg>
          </div>
        </div>
        <div >

      </div>
      </div>

    </div>
      <font-awesome-icon :icon="favourite.isFavorite(cardDetail) ? ['fas', 'heart'] : ['far', 'heart']" class="text-white fa-2x"  alt="heart-button" @click="favourite.checkFavourites(cardDetail)" />

    </div>
      </div>
      </div>


  </template>
<style scoped>
.cardDetailProduct{
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
}

.cardName{
  margin-top: 20px;
}
.cardTitleDescription{
  margin-top: 10px;
}
.cardDescription{
  margin-top: 5px;
}
.colorTitle, .cardRating{
  margin-top: 5px;
}

</style>


  <script setup>
  import { useProductStore } from '@/stores/productStore'
  const productsData = useProductStore();
  const products = productsData.products;

  import { useCounterStore } from '@/stores/favoriteStore';
  const favourite = useCounterStore();


  import { useRoute } from 'vue-router'

  const route = useRoute()
  const id = route.params.id

  const cardDetail = products.find(product => product.id==id);




  </script>
