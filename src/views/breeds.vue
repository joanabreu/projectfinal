<template>
<!-- Fotos da API -->
  <div class="breeds">
      <div class="columns"></div>
    <div v-for="(item, index) in resultados" :key="index">
<!-- Foto em Appcard -->
      <app-card largura="200px">
<!-- Routerlink -->
            <router-link :to='"/breeds/"+item.name'></router-link>
<!-- Botão Imagem -->
            <button class="btn success" @click="navega(item.name)">{{ item.name }}</button>
            <br>
<!-- Fotos Propriedades -->
            <img :src="item.photo" height="100" width="150" alt="">
        </app-card>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import appCard from '@/components/app-card.vue'
export default {
  components:{
    appCard
  },
  data(){
    return {
      resultados: "",
      pesquisa: "",
      breeds:[]
    }
  },
    methods:{
        navega(breed){
                this.$router.push('/breeds/'+ breed)
        },
        carregaBreed(breed){
        return axios.get('https://dog.ceo/api/breed/'+ breed +'/images/random')
        .then(
            res=> res.data.message
            )
        },
        carregaInfo(){
            axios.get('https://dog.ceo/api/breeds/list/all')
            .then(
                res => {
                    this.resultados = res.data.message //res.data.collection.items
                    console.log(this.resultados)
                    return res.data.message
                }
            )
            .then(
                res => {
                    this.breeds=[...Object.keys(res)]
                    console.log(this.breeds)
                    return [...Object.keys(res)]
                }
            )
            .then(
                res => {
                    return axios.all([...res.map(x=>this.carregaBreed(x))])
                }
            )
            .then(
                res => {
                this.resultados = []
                for (let [index, item] of res.entries()) {
                    this.resultados.push(
                        {
                            'name':this.breeds[index],
                            'photo': item
                        }
                    )

                }
            }
        )
    }
    
    },
    created (){
            this.carregaInfo()
    }
}</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style coped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
   display: inline-block;
   margin: 0 10px;
}
a {
    color: #42b983;
}
.breeds{
  display: flex;
  flex-flow: row wrap;
}
.btn {
    border-color: 2px solid black;
    border-radius: 5px;
    background-color: white;
    color: black;
    padding: 5px 13px;
    font-size: 12px;
    cursor: pointer;
    
}
.success {
    border-color: 2px #4CAF50;
    color: green;
}
.sucess:hover {
    background-color: #4CAF50;
    color: white;
}


</style>