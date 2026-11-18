import conexao from "../config/conexao.js";
const ItemSchema = new conexao.Schema({
  nome:{ type: String,required: true},
  estacao:{ type: String,required: true},
  onde_encontrar:{ type: String,required: true},
  dificuldade:{ type: String,required: true}
  
});
const Item = 
conexao.model("Item", ItemSchema);
export default Item;