<template>
<!-- Apresentação Equipa -->
<div class="team-section">
  <h1>Equipa</h1>
  <span class="border"></span>
<div class="ps">
<!-- Fotos da Equipa -->
  <a href="#p1"><img src="../assets/Chloe.jpg" alt="p1"></a>
  <a href="#p2"><img src="../assets/Big.jpg" alt="p2"></a>
  <a href="#p3"><img src="../assets/Nina.jpg" alt="p3"></a>
</div>
<!-- Descrição do Membro1 -->
<div class="section" id="p1">
  <span class="name">Chloe Sky</span>
  <span class="border"></span>
  <p>
Sou um "Yorkshire" conhecido como uma das raças de cães mais pequena do mundo. O que nos falta em tamanho sobra em inteligência. Somos corajosos, independentes, adoramos brincar e gastar a nossa energia.
  <br>Altura média de de 18 a 23cm e um peso corporal que pode atingir no máximo, 3,2 kg por norma.
    </p>
</div>
<!-- Descrição do Membro2 -->
<div class="section" id="p2">
  <span class="name">Big</span>
  <span class="border"></span>
  <p>
Sou um "Labrador", a raça de cães mais popular do mundo. Conhecido como dócil, sociável e trabalhador especializado. Somos animais muito ativos e adoramos passear para manter a linha. Além disso, ajudamos os humanos em muitas atividades que estejam limitados.
<br>Altura média de 56 a 57cm nos machos, e entre 54 e 56cm nas fêmeas. Um peso corporal médio de 37kg. 
  </p>
</div>
<!-- Descrição do Membro3 -->
<div class="section" id="p3">
  <span class="name">Nina</span>
  <span class="border"></span>
  <p>
Sou um "Husky" siberiano conhecido como o cão trabalhador. Somos considerados o lobo dos cães. Cheio de disposição e exigindo bastante atividade física para gastar toda a minha energia.
<br>Altura média de de 50 a 60cm e um peso corporal que oscila entre os 15 e os 27kg. 
  </p>
</div>
</div>   

</template>

<script>
export default {
  methods:{
    navega(){
      this.$router.push('/about')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.team-section {
  overflow: hidden;
  text-align: center;
  padding: 100px;

}

.team-section h1 {
  text-transform: uppercase;
  margin-bottom: 60px;
  color: black;
  font-size: 40px;
}

.border {
  display: block;
  margin: auto;
  width: 160px;
  height: 3px;
  background: #3498db;
  margin-bottom: 40px;
}

.ps {
  margin-bottom: 40px;
}

.ps a {
  display: inline-block;
  margin: 0 30px;
  width: 270px;
  height: 180px;
  overflow: hidden;
  border-radius: 70%;
}

.ps a img {
  width: 100%;
  filter: grayscale(100%);
  transition: 0.4s all;
}

.ps a:hover > img {
  filter: none;
}

.section {
  width: 600px;
  margin: auto;
  font-size: 20px;
  color: black;
  text-align: justify;
  height: 0;
  overflow: hidden;
  
}

.section:target {
  height: auto;
}

.name {
  display: block;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
}

</style>