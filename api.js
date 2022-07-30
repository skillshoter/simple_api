const { response } = require('express');
const express = require('express')
const api = express();

api.get("/v1",(request,response)=>{
    response.json("Servidor rodando");
});

api.listen(8080,() => {
    console.info("Aplicação de pé");
})