//Importando o express
const express = require("express");

//Importando o Cors
const cors = require("cors");

//Importando o mongoose
const mongoose = require("mongoose");

//Importando o requireDir
const requireDir = require("require-dir");

//Iniciando o App
const app = express();
//Permite que envie dados para a app no formato json
app.use(express.json());
//Dominios que podem acessar nossa app - conf dentro dos ().
app.use(cors());

//iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

requireDir("./src/models");

// const Product = mongoose.model("Product");

//Rotas - o (corringa)use recebe todo o tipo de requisição
app.use("/api", require("./src/routes"));

//Ouvindo na porta 3001 do navegador
app.listen(3001); 
