<template>
<!-- Apresentação das Imagens de cada Raça da API -->
  <div class="app">
        <div class="hello">
          <div v-for="(item, index) in resultados" :key="index">
<!-- Botão Imagem Favorita -->
            <h3>{{ item }}<button btn1 class="btn info" v-on:click="addelement(item)">★</button></h3>
<!-- Propriedades da Imagem -->
          <img :src="item" height="300" width="300" alt="">
          </div>
        </div>
<!-- Coluna dos Favoritos -->
      <div class="Favoritos">
        <br>
        <h2>Favoritos</h2>
<!-- Adição de Fotos Favoritas -->
        <div v-for="(favorite, index) in favoriteStoreX.state.favoritecounter" :key="index">
<!-- Remover Fotos dos Favoritos -->
          <img :src="favorite" height="300" width="300" alt="" v-on:click="removeelement(index)" :id=index>
        </div>
      </div>
    </div>

</template>

<script>
//Importar elementos
import axios from "axios"
import favoriteStoreX from "../stores/favoriteStoreX"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  //Variáveis Criadas
  data(){
    return {
      resultados: "",
      pesquisa: "",
      favoriteStoreX
    }
  },
  //Métodos Utilizados 
  methods: {
    extractbreed(element){
      
      //var components = element.split("/")
      console.log("teste")
    },
    addelement(element/*, breed*/){
      if(!favoriteStoreX.state.favoritecounter.includes(element)){
        favoriteStoreX.commit('addelement', element)
        //extractbreed(element)
        //favoriteStoreX.commit('addbreed', breed)
      }
    
    },
    removeelement(index){
      favoriteStoreX.commit('removeelement', index)
    }
    ,
//Imagens da API de cada Raça
    carregaInfo(query){
      axios.get('https://dog.ceo/api/breed/'+query+'/images')
        .then(
          res => {
            this.resultados= res.data.message //res.data.collection.items
            console.log(this.resultados)
          }
        )
    }
  },

  created (){
      this.carregaInfo(this.$route.params.id)
  }
}
</script>

<style scoped>
.app {

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-image: url(https://www.publicdomainpictures.net/pictures/40000/velka/paw-prints-background.jpg);

}

.Favoritos {
  display: flex;
  min-width: 400px;
  margin-top: 50px;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background-color:#eee;
  border: 1px solid #30f009;
}

.btn1{
    border-color: 2px solid black;
    border-radius: 5px;
    background-color: white;
    color: black;
    padding: 5px 13px;
    font-size: 12px;
    cursor: pointer;
    
}
.info {
    border-color: 2px rgb(238, 255, 0);
    color: black;
}
.info:hover {
    background-color:  rgb(238, 255, 0);
    color: white;
}</style>