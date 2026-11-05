const express = require('express');
const app = express();

app.use(express.json());
//Aqui é meu array de objetos
let tasks = [
    {id:1,title:"Estudar API Para o CPQD",completed:false,category:"Estudos"},
    {id:2,title:"Passear com a Sol e A lua",completed:false,category:"TarefasCasa"},
    {id:3,title:"Estudar express",completed:true,category:"Estudos"},
    {id:4,title:"Assistir Jogo Do São Paulo",completed:false,category:"Lazer"},
    {id:5,title:"Estudar Para a Unicamp",completed:true,category:"Estudos"}
];
//Para utilizar no post
let nextId = 6;

app.get("/", (req,res) => {

    res.json({
        message:'API em node express está funcionando!'
    });
});
//criando a rota tasks com a função de retornar os json conforme os parâmetros..
//usar filter
app.get('/tasks', (req,res) => {
const { completed, category, search } = req.query;
let result = [...tasks];

if(completed != undefined){
const isCompleted = completed === 'true';
    result = result.filter(task =>{
        return task.completed === isCompleted;
    });
}

if(category != undefined){
    result = result.filter(task =>{
        return task.category === category;
        });
    }
res.json(result);
});

//usar find
app.get('/tasks/:id', (req,res) => {
const taskId = Number(req.params.id);
    const task = tasks.find(data =>{
        return data.id === taskId;
    });
if(!taskId){
    res.status(404).json({
        error:'ID Não Encontrado!'
        });
    }
});

app.post('/tasks', (req,res) => {
const {title,category} = req.body;
let result = [...tasks];

if(!title || !category){
    return  res.status(400).json({
        error:'Titulo e Categoria sao obrigatórios'
    });
}

const newTask = {
    id:nextId,
    title:title,
    completed:false,
    category:category
};

tasks.push(newTask);
nextId++;

res.status(201).json(newTask);

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servido Rodando em http://localhost:${PORT}`);
});



