<template>
<!-- Logo da Home -->
  <div class="home">
    <img alt="logo" src="../assets/logo.png">
<!-- Mensagem Apresentada -->
    <HelloWorld msg="Bem-vindo ao Doggie! O melhor site de cães alguma vez conhecido! Pesquise as suas raças de cães favoritas!"/>
  </div>
 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

