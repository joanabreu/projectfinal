<template>
<div class="venda">
    <h3>Destaque para Venda</h3>
    <br>
    <div v-for="(n, index) in 6" :key="index" class="destaque">
      <div v-if="index < favoriteStoreX.state.favoritecounter.length">
        <img :src="favoriteStoreX.state.favoritecounter[index]" height="300" width="300" alt="">  
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import favoriteStoreX from "../stores/favoriteStoreX"


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
   data(){
    return {
      favoriteStoreX,
    }
  }
}
</script>