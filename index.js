import express from 'express'
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + '/public'))



import Item from './models/Item.js'
import Sala from './models/Sala.js'
import Npc from './models/Npc.js'

app.get('/', (req, res) => {
    res.render("index");
})

//NPC
app.get('/npc', async (req, res) => {
    const npcs = await Npc.find()
    res.render("npc/lst", {npcs});
})

app.get('/npc/add', (req, res) => {
    res.render("npc/add");
})

app.get('/npc', async (req, res) => {
    const npcs = await Npc.find()
    res.render("npc/lst", { npcs })
})

app.get('/npc/add', (req, res) => {
    res.render("npc/add")
})

app.post('/npc/add', async (req, res) => {
    const { nome, aniversario, presente, dica } = req.body
    await Npc.create({ nome, aniversario, presente, dica })
    res.redirect("/npc")
})

app.get('/npc/upd/:id', async (req, res) => {
    const npc = await Npc.findById(req.params.id)
    res.render("npc/upd", { npc })
})

app.post('/npc/upd/:id', async (req, res) => {
    const { id, nome, aniversario, presente, dica } = req.body
    await Npc.findByIdAndUpdate(id, { nome, aniversario, presente, dica })
    const npcs = await Npc.find()
    res.render("npc/lst", { npcs })
})


app.get('/npc/del/:id',  async (req, res) => {
  await Npc.findByIdAndDelete(req.params.id)
 const npcs = await Npc.find()
 res.render("npc/lst", {npcs});
})


//SALA
app.get('/sala', async (req, res) => {
    const salas = await Sala.find()
    res.render("sala/lst", {salas});
})

app.get('/sala/add', (req, res) => {
    res.render("sala/add");
})
 
app.post('/sala/add',  async (req, res) => {
    const {nome, recompensa, dica} = req.body
    await Sala.create({nome, recompensa, dica})
    res.render("sala/add");
})

app.get('/sala/upd/:id', async (req, res) => {
  const sala = await Sala.findById(req.params.id)
  res.render("sala/upd", {sala});
})

app.post('/sala/upd/:id',  async (req, res) => {
    
    const {id, nome, recompensa, dica} = req.body
    await Sala.findByIdAndUpdate(id, {nome, recompensa, dica})
    const salas = await Sala.find()
    res.render("sala/lst", {salas});
    
})

app.get('/sala/del/:id',  async (req, res) => {
  await Sala.findByIdAndDelete(req.params.id)
 const salas = await Sala.find()
 res.render("sala/lst", {salas});
})

//ITEM

app.get('/item/del/:id',  async (req, res) => {
  await Item.findByIdAndDelete(req.params.id)
 const items = await Item.find()
 res.render("item/lst", {items});
})

app.get('/item',  async (req, res) => {
 //listar espécies
 const items = await Item.find()
 res.render("item/lst", {items});

})

//rota para pesquisar item por nome
app.post('/item/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const items = await Item.find({
    nome: new RegExp(pesquisar, 'i')
  });
  res.render("item/lst", { items });
})

app.get('/item/upd/:id', async (req, res) => {
  const item = await Item.findById(req.params.id)
  res.render("item/upd", {item});
})

app.get('/item/add',  (req, res) => {
  res.render("item/add");
})

app.post('/item/upd/:id',  async (req, res) => {
    
    const {id, nome, estacao, onde_encontrar, dificuldade } = req.body
    await Item.findByIdAndUpdate(id, {nome, estacao, onde_encontrar, dificuldade})
    const items = await Item.find()
    res.render("item/lst", {items});
    
})

//Rota POST pra gravar no Banco de Dados
app.post('/item/add',  async (req, res) => {
    const {nome,estacao, onde_encontrar, dificuldade} = req.body
    await Item.create({nome, estacao, onde_encontrar, dificuldade})
    res.render("item/add");
})


app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
});