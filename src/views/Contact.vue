<template>
<!-- Contacto Formulário -->
    <div class="contact-form">
        <h1>Contacto</h1>
<!-- Nome -->
        <div class="txtb">
            <label>Nome Completo</label>
            <input type="text" name="" value="" placeholder="Introduza o Seu Nome">
        </div>
<!-- Email -->
          <div class="txtb">
            <label>Email</label>
            <input type="email" name="" value="" placeholder="Introduza o Seu Email">
        </div>
<!-- Telefone -->
         <div class="txtb">
            <label>Contacto Telefónico</label>
            <input type="text" name="" value="" placeholder="Introduza o Seu Telemóvel">
        </div>
<!-- Mensagem -->
           <div class="txtb">
            <label>Mensagem</label>
            <textarea></textarea>
        </div>
<!-- Botão Enviar -->
        <a class="btn2">Enviar</a>
    </div>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.contact-form {
    width: 85%;
    max-width: 600px;
    background: #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 30px 40px;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 0 20px #000000b3;
    font-family:"Montserrat", sans-serif;
}
.contact-form h1{
    margin-top: 0;
    font-weight: 200;
}
.txtb{
    border: 1px solid gray;
    margin: 8px 0;
    padding: 12px 18px;
    border-radius: 8px;
}
.txtb label{
    display: block;
    text-align: left;
    color: #333;
    text-transform: uppercase;
    font-size: 14px;
}
.txtb input,.txtb textarea{
    width: 100%;
    border: none;
    background: none;
    outline: none;
    font-size: 18px;
    margin-top: 6px;
}
.btn2 {
    display: inline-block;
    background-color: #9b59b6;
    padding: 14px 0;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 8px;    
    width: 100%;
}
</style>

