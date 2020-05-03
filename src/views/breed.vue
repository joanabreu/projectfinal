<template>
  <div class="app">
        <div class="hello">
          <div v-for="(item, index) in resultados" :key="index">
            <h3>{{ item }}</h3>
          <img :src="item" alt="">
          </div>
        </div>
        <div class="listaProdutos">
      <app v-for="(artigo, index) in artigos" :key="index" :produto="artigo.produto" :valor="+artigo.valor" v-on:click.native="carregaCarrinho(artigo)" style="cursor: pointer" />
    </div>
      <div class="listaCarrinhoCompras">
        <br>
        <h2>Carrinho de Compras</h2>
        {{ ultimaCompra }}
        <app v-for="(artigo, index) in carrinhoCompras" :key="index" :produto="artigo.produto" :valor="+artigo.valor" />
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
  data(){
    return {
      resultados: "",
      pesquisa: "",
      carrinhoCompras:[],
      ultimaCompra: false,
      resultados: ""
    }
  },
  methods: {
    carregaInfo(query){
      axios.get('https://dog.ceo/api/breed/'+query+'/images')
        .then(
          res => {
            this.resultados= res.data.message //res.data.collection.items
            console.log(this.resultados)
          }
        )
    },
    carregaCarrinho(artigo) {
      this.carrinhoCompras.unshift({...artigo, dataCompra: new Date()});
      this.ultimaCompra = this.carrinhoCompras[0].dataCompra;
    },
    descarregaCarrinho(index) {
      this.carrinhoCompras.splice(index,1)
    },
    sum() {
      if (this.carrinhoCompras.length < 1) {
        return 0
      }
      else {
        return this.carrinhoCompras.map( (a) => Math.floor(a.valor))
                                    .reduce((a,b)=>{return a + b })
      } 
    }

  },
  created (){
      this.carregaInfo(this.$route.params.id)
  }
}
</script>

<style scoped>
.app {
  margin-top: 4.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.listaProdutos {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.listaCarrinhoCompras {
  display: flex;
  min-width: 500px;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #06c4d1;
  background-color: #eee;

}
</style>