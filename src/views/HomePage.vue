<template>
  <main class="min-h-[100vh]  w-[100%] h-[100%] bg-[#343740] flex  flex-col items-center sm:gap-[30px] md:gap-[50px]">

    <div class="w-[60%] sm:w-[65%] sm:justify-between gap-[20px] h-[70px] flex flex-row items-center">

    <button @click="categoryBtnClick" class="text-white  flex flex-row gap-[10px] cursor-pointer">
      <p class="text-[20px]">Категории</p>
      <span class="w-[20px] h-[20px] flex justify-center items-center">
        <img ref="dropDownIcon" :src="DropDownIcon" class="transition-transform duration-300 w-[20px]" alt="DropDownIcon">
      </span>
    </button>

  <div class="hidden sm:block max-w-[500px]  w-[100%]   border-b border-white flex flex-row justify-between">
          <input
            v-model="search"
            type="text"
            placeholder="Поиск...."
            class="h-[40px]  w-[90%]  text-white placeholder-white focus:outline-none"
          />
          <button class="w-[25px]">
           <img :src="SearchIcon" class="w-[5%] w-[25px] h-[25px]" alt="search-icon">
          </button>
      </div>
  </div>

  <div v-if="filteredProducts.length === 0">
      <h1 class="text-white">Ничего не найдено</h1>
  </div>
  <div v-else>

    <div class="products grid gap-y-[30px] grid-cols-1 md:grid-cols-2  md:gap-x-[100px] lg:grid-cols-3">
<transition-group name="list" >

  <div class="w-[100%]  card grid gap-[10px] w-[250px] sm:w-[450px]  md:w-[300px]  lg:w-[250px] " v-for="card in filteredProducts" :key="card.id">

    <router-link :to="`/product/${card.id}`">
      <div class="card-image   w-[100%]" >
       <img :src="card.images[0]" class="bg-cover bg-center w-[100%] h-[100%] rounded-[15px]" alt="card-image">
     </div>
    </router-link>


     <div class="card-discription w-[100%] flex flex-row justify-between">
     <div class="card-text text-white">
       <div class="card-name">
         <h2>{{card.name}}</h2>
       </div>
       <div class="card-price">
         <h3>{{ `${card.price}тг`}}</h3>
       </div>
     </div>

     <div class="card-button w-[40px]">
       <button class="favourite-button" >
         <font-awesome-icon :icon="favourite.isFavorite(card) ? ['fas', 'heart'] : ['far', 'heart']" class="text-white fa-2x"  alt="heart-button" @click="favourite.checkFavourites(card)" />
       </button>
     </div>
   </div>
  </div>
</transition-group>

</div>







  </div>

  </main>
    <div ref="categoryMenu" class="overflow-y-auto overflow-x-hidden top-[5%] w-[90%] h-[75vh] top-[70px]  fixed bg-white left-[-100%] sm:top-[200px] lg:l-[0] lg:w-[40%] xl:w-[25%] rounded-2xl  md:absolute md:w-[50%] xl-[30%]" >
      <div class="close w-[90%]  flex justify-end">
        <button  class="flex justify-center items-center rounded-sm  w-[40px]  h-[40px] bg-[#343740]" @click="categoryBtnClick">
          <img :src="closeIcon" class="w-[30px] h-[30px]" alt="closeIcon">
        </button>
      </div>
    <div class="gender  flex justify-around w-[100%]">
        <button @click="changeActiveOfMan"  :class="manIsActive ? 'outline outline-2 shadow-xl font-bold' : 'text-white' "  class="w-[124px] h-[56px] bg-[#343740] text-white rounded-xl">
          Мужское
        </button>
        <button  @click="changeActiveOfWoman" :class="womanIsActive ? 'outline outline-2 shadow-xl font-bold' : 'text-white'" class="w-[124px] h-[56px] bg-[#343740] text-white rounded-xl">
          Женское
        </button>
    </div>

    <div class="sort">

        <h1>Сортировка</h1>

        <div class="flex flex-col w-[90%] ">
          <label @click="sortProductsByPrice('default')" class="flex flex-row items-center gap-[10px]">
             <input type="radio" name="option" value="3" checked> Сортировка по умолчанию
          </label>
          <label @click="sortProductsByPrice('asc')" class="flex flex-row items-center gap-[10px]">
            <input type="radio" name="option" value="1" >
             <h2>По цене</h2>
            <img :src="upIcon" class="w-[30px]" alt="upIcon" >
          </label>
          <label @click="sortProductsByPrice('desc')" class="flex flex-row items-center gap-[10px]">
            <input type="radio" name="option" value="2">
            <h2> По цене</h2>
            <img :src="upIcon" class="w-[30px] rotate-180" alt="upIcon" >
          </label>

        </div>

        <hr class="category-line w-[90%]">

        <div class="buttonsOfPrice w-[90%]">
          <div>
            <p>Цена</p>
          </div>
          <div class="flex flex-row items-center justify-between">
            <input class="rounded-[10px] bg-[#343740] text-white placeholder-white w-[100px] h-[50px] text-center" v-model="minPriceLimit"  :min="minPriceLimit" :max="maxPriceLimit" maxlength="5"  type="number">
            <div class="w-[20px] h-[2px] bg-black">
            </div>
            <input v-model="maxPriceLimit" class="rounded-[10px] bg-[#343740] text-white placeholder-white w-[100px] h-[50px] text-center"  :min="minPriceLimit" :max="maxPriceLimit" maxlength="5"  type="number">
          </div>
        </div>
      </div>

      <div class="sliderOfPrice ">
          <div class="rangeOfPrices w-[90%] flex justify-between">
            <p>
              От {{minPriceLimit }}
            </p>
            <p>
              До {{maxPriceLimit}}
            </p>
          </div>

          <div ref="line" class=" sliderLine  w-[90%] h-[20px] rounded-md bg-[#343740] flex justify-between items-center">
            <div ref="leftCircle"  @touchstart="startCheck" @touchmove="(e) => changeThePosition(e, 1)" @touchend="stopCheck" :style="{ transform: `translateX(${positionLeftCircle}px)` }"  class="button-left-side   w-[40px] h-[40px] bg-white rounded-full border-[#A5A5A5] border-3 cursor-pointer transition-transform"></div>
            <div ref="rightCircle" @touchstart="startCheck" @touchmove="(e) => changeThePosition(e, 2)" @touchend="stopCheck" :style="{transform: `translateX(${positionRightCircle}px)`}"   class="button-right-side  w-[40px] h-[40px] bg-white rounded-full border-[#A5A5A5] border-3 cursor-pointer transition-transform" ></div>
          </div>

      </div>

      <div  class="categoryOfMan h-[500px]" v-if="manIsActive">
        <div class="categoriesOfManClothes w-[90%] ">
        <h2 class="">Тип одежды</h2>
        <label  v-for="category of categoriesOfManClothes" class="labelOfCategoriesOfManClothes gap-x-[10px] flex flex-row " :key="category">
          <input type="checkbox"  :value="category"  v-model="selectedCategories" class="w-[22px]">
          <h3 class="text-black">{{ category }}</h3>
        </label>
      </div>

      <hr class=" category-line w-[90%]">

      <div class="titleOfColorsOfMan  mt-[20px]">
        <h2>Цветы</h2>
        <label  v-for="color of colorsOfCategoryClothes" class="colorsOfCategoriesOfManClothes gap-x-[10px] flex flex-row " :key="color">
          <input type="checkbox" :value="color" v-model="selectedColors" class="w-[22px]">
          <h3 class="text-black">{{ color }}</h3>
        </label>
      </div>

      <hr class="  category-line w-[90%]">

      </div>

      <div  class="categoryOfWoman h-[500px]" v-if="womanIsActive">
        <div class="categoriesOfManClothes w-[90%] ">
        <h2 class="">Тип одежды</h2>
        <label  v-for="category of categoriesOfWomanClothes" class="labelOfCategoriesOfManClothes gap-x-[10px] flex flex-row " :key="category">
          <input type="checkbox" v-model="selectedCategories" class="w-[22px]">
          <h3 class="text-black">{{ category }}</h3>
        </label>
      </div>

      <hr class=" category-line w-[90%]">

      <div class="titleOfColorsOfMan  mt-[20px]">
        <h2>Цветы</h2>
        <label  v-for="color of colorsOfCategoryClothes" class="colorsOfCategoriesOfManClothes gap-x-[10px] flex flex-row " :key="color">
          <input type="checkbox" class="w-[22px]">
          <h3 class="text-black">{{ color }}</h3>
        </label>
      </div>

      <hr class="  category-line w-[90%]">



      </div>


      <button class="fileterButton bg-[#343740] h-[45px] w-[208px] text-white rounded-[10px]">Сбросить фильтр</button>

        <div class="w-[100%] h-[100px]">

        </div>
    </div>
</template>

<style scoped>
.categoriesOfManClothes{
  margin-top: 30px;
}

.fileterButton{
  margin-top: 20px;
  margin-left: 5%;
  margin-top: 50px;
}

.labelOfCategoriesOfManClothes{
  margin-top: 5px;
}

.titleOfColorsOfMan{
  margin-top: 10px;
}

.colorsOfCategoriesOfManClothes{
  margin-top: 10px;
}

.button-left-side{
  margin-left: -5px;
}

.button-right-side{
  margin-right: -5px;
}
.sliderOfPrice{
  margin-top: 30px;
  margin-left: 5%;
}
.sliderLine{
  margin-top: 10px;
}
.sort{
    margin-left: 5%;
    margin-top: 30px;
  }

  .close{
    margin-top: 30px;

  }

  .gender{
    margin-top: 15px;
  }

  .buttonsOfPrice{
    margin-top: 15px;
  }

  .category-line{
    margin-top: 15px;
  }

  .categoryOfMan, .categoryOfWoman{
    margin-left: 5%;
  }

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

@media screen and (min-width: 1400px) {
    .products{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }




</style>

<script setup>

  import SearchIcon from '@/assets/img/search-icon.png';
  import {computed, onMounted,  ref, watch } from 'vue'
  import DropDownIcon from '@/components/icons/arrow-down.png';
  import closeIcon from '@/components/icons/close.png';
  import upIcon from '@/components/icons/up-arrow-svgrepo-com.svg'
  import { storeToRefs } from 'pinia';

  import {useProductStore} from '@/stores/productStore';
  let productStore = useProductStore();

  import { useCounterStore } from '@/stores/favoriteStore';
  const favourite = useCounterStore();



  const { products } = storeToRefs(productStore);


  onMounted(async () => {
  await productStore.fetchProducts()
})

    let rotated = false;
    const search = ref('')
    let widtdLine;
    let minPriceLimit = ref(5000);
    let maxPriceLimit = ref(57000);
    let categoriesOfManClothes = ref(["Верхняя одежда", "Джинсы и брюки", "Шорты", "Свитшоты и худи", "Крассовки", "Футболки и рубашки", "Спортивная одежда", "Обувь", "Костюмы и пиджаки"]);
    let colorsOfCategoryClothes = ref(['Красный', 'Синий', 'Зеленый', 'Чёрный', 'Белый']);

    let categoriesOfWomanClothes = ref(["Куртки, плащи, пальто", "Рубашки и блузки", "Джинсы и брюки", "Свитшоты и худи", "Юбки", "Платья", "Шорты", "Костюмы", "Обувь"]);

      let selectedColors = ref([]);
      let selectedCategories = ref([]);

      let manIsActive = ref(false);
      let womanIsActive = ref(false);

      let sortPriceOption = ref('default');

      watch(minPriceLimit, (newValue) => {
       if(newValue > 57000){
          minPriceLimit.value = 57000;
        }
      })

      watch(maxPriceLimit, (newValue) => {
        if(newValue > 57000){
          maxPriceLimit.value = 57000;
        }
      })

      let filteredProducts =  computed(()=>{

        if (!products.value || !Array.isArray(products.value)) {
          return [];
        }

        let result = [...products.value];




        if(manIsActive.value)  result = result.filter(product => product.gender == 'мужское');
        if(womanIsActive.value) result = result.filter(product => product.gender == 'женское');
        if(sortPriceOption.value!='default'){
            result.sort(sortByPrice[sortPriceOption.value]);
        }

        result = result.filter(product => product.price >= minPriceLimit.value && product.price <= maxPriceLimit.value);



        result = result.filter(product => {
             const matchesCategory = selectedCategories.value.length === 0 || selectedCategories.value.includes(product.category);
             const matchesColor = selectedColors.value.length === 0 || selectedColors.value.includes(product.color);
             return matchesColor && matchesCategory;
            });

            if (search.value.length >= 3) {
    result = result.filter(product =>
      product.name.toLowerCase().includes(search.value.toLowerCase())
    )
  }

        return result;
      })

      const sortProductsByPrice = (option)=>{
        sortPriceOption.value = option;
      }

      const sortByPrice = {
          asc: (a, b) => a.price - b.price,
          desc: (a, b) => b.price - a.price,
        }

    let changeActiveOfMan = ()=> {
        manIsActive.value = !manIsActive.value;
        womanIsActive.value = false;
    }

    let changeActiveOfWoman = ()=> {
      womanIsActive.value = !womanIsActive.value;
      manIsActive.value = false;
    }

    let line = ref();
    let leftCircle =  ref(null);
    let rightCircle = ref(null);

    let leftSide;
    let rightSide;

    const dropDownIcon = ref(null);
    const categoryMenu = ref(null);



    const positionLeftCircle = ref();
    const positionRightCircle = ref();

    let leftCirclePositionX;
    let leftCircleRightSide;
    let rightCirclePositionX;
    let rightCircleLeftSide
    let leftCircleLeftSide;
    let rightCIrlceRightSide;

    const startCheck = ()=>{

        window.addEventListener('touchmove', changeThePosition);
             leftCirclePositionX = leftCircle.value.getBoundingClientRect();
             leftCircleLeftSide = leftCirclePositionX.left;
             leftCircleRightSide = leftCirclePositionX.right;
             rightCirclePositionX = rightCircle.value.getBoundingClientRect();
             rightCircleLeftSide = rightCirclePositionX.left;
             rightCIrlceRightSide = rightCirclePositionX.right;

            if((Math.round(rightCircleLeftSide) -  Math.round(leftCircleRightSide)<10) ){
              positionLeftCircle.value = positionLeftCircle.value-20;

            }

            if((Math.round(rightCircleLeftSide) <  Math.round(leftCircleRightSide))){
              positionLeftCircle.value = 0;
            }

            if((Math.round(leftCircleRightSide) -  Math.round(rightCircleLeftSide)>-10) ){
              positionRightCircle.value = positionRightCircle.value+20;
            }

            if((Math.round(rightCircleLeftSide) <  Math.round(leftCircleRightSide))){
              positionRightCircle.value = 0;
            }
    }


    const changeThePosition = (e, arg) => {
             widtdLine = line.value?.getBoundingClientRect().width;
             leftCirclePositionX = leftCircle.value.getBoundingClientRect();
             leftCircleRightSide = leftCirclePositionX.right;
             leftCircleLeftSide = leftCirclePositionX.left;
             rightCirclePositionX = rightCircle.value.getBoundingClientRect();
             rightCircleLeftSide = rightCirclePositionX.left;
             rightCIrlceRightSide = rightCirclePositionX.right;
            if((Math.round(rightCircleLeftSide) -  Math.round(leftCircleRightSide)<10) ){
              positionLeftCircle.value = positionLeftCircle.value-20;
            }

            if((Math.round(rightCircleLeftSide) <  Math.round(leftCircleRightSide))){
              positionLeftCircle.value = 0;
            }

            if((Math.round(leftCircleRightSide) -  Math.round(rightCircleLeftSide)>-10) ){
              positionRightCircle.value = positionRightCircle.value+20;
            }

            if((Math.round(rightCircleLeftSide) <  Math.round(leftCircleRightSide))){
              positionRightCircle.value = 0;
            }




        if(arg==1){
          minPriceLimit.value = Math.round(50000 * ((leftCircleLeftSide)/widtdLine)/1000)*1000;

          if(positionLeftCircle.value > leftCircle.value){
            positionLeftCircle.value=0;

          }else{
            positionLeftCircle.value = e.touches[0].clientX-leftSide;

          }
        }



        if(arg==2){
          maxPriceLimit.value = Math.round(50000 * ((rightCIrlceRightSide)/widtdLine)/1000)*1000;

          if(positionRightCircle.value>=rightSide.value){
            positionRightCircle.value=0;
          }else{
           positionRightCircle.value = e.touches[0].clientX-rightSide;
          }
        }

        if(positionLeftCircle.value<leftSide){
            positionLeftCircle.value=0;
          }

        if(positionRightCircle.value>leftSide){
          positionRightCircle.value=0;
        }
      }




  const stopCheck = () => {
             leftCirclePositionX = leftCircle.value.getBoundingClientRect();
             leftCircleRightSide = leftCirclePositionX.right;
             rightCirclePositionX = rightCircle.value.getBoundingClientRect();
             rightCircleLeftSide = rightCirclePositionX.left;
             leftCircleLeftSide = leftCirclePositionX.left;
             rightCIrlceRightSide = rightCirclePositionX.right;
             minPriceLimit.value = Math.round(50000 * ((leftCircleLeftSide)/widtdLine)/1000)*1000;
             maxPriceLimit.value = Math.round(50000 * ((rightCIrlceRightSide)/widtdLine)/1000)*1000;



            if((Math.round(rightCircleLeftSide) -  Math.round(leftCircleRightSide)<10) ){
              positionLeftCircle.value = positionLeftCircle.value-20;
            }

            if((Math.round(rightCircleLeftSide) <  Math.round(leftCircleRightSide))){
              positionLeftCircle.value = 0;
            }

            if((Math.round(leftCircleRightSide) -  Math.round(rightCircleLeftSide)>-10) ){
              positionRightCircle.value = positionRightCircle.value+20;
            }

            if((Math.round(rightCircleLeftSide) <  Math.round(leftCircleRightSide))){
              positionRightCircle.value = 0;
            }
    window.removeEventListener('touchmove', changeThePosition);
  }

  const categoryBtnClick = ()=>{

    rotated = !rotated;
    if(dropDownIcon.value){
      dropDownIcon.value.style.transform = rotated ? 'rotate(180deg)' : 'rotate(0deg)'
      document.body.style.overflow=rotated ? 'hidden' : '';
      categoryMenu.value.style.left = rotated ? '5%' : '-100%'
    }

    const rect = line.value.getBoundingClientRect();
     leftSide =  rect.left;
     rightSide = rect.right;
  }



</script>
