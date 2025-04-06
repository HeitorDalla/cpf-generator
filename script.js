"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    document.querySelector("#cpf").focus(); // Assim que a pagina atualizar, esta dando foco ao input

    const inputCpf = document.querySelector("#cpf");
    inputCpf.addEventListener("input", (event) => {
        let valor = event.target.value.replace(/\D/g, ''); // Converte todos os caracteres que não sejam números para 'vazio'
        
    });

});