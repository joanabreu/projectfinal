<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="pesquisa">
    <button class="btn success" @click="carregaInfo(pesquisa)">Pesquisar</button>
    <div v-for="(item, index) in resultados" :key="index">
      <h3>{{ item }}</h3>
      <img :src="item" alt="">
      <!--<h3>{{item.data[0].title}}</h3>
      <img :src="item.links[0].href" alt="">
      <p>{{item.data[0].description}}</p>-->
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      resultados: "", 
      pesquisa: ""
    }
  },
  methods: {
    carregaInfo(query) {
      axios.get('https://dog.ceo/api/breed/'+ query +'/images')
        .then(
          res => {
            this.resultados = res.data.message
              console.log(this.resultados)
          }
        )
    }
  }
}</script>

<style>
.hello {
  padding: 100px;
}

</style>