import conexao from "../config/conexao.js";
const ItemSchema = new conexao.Schema({
  nome:{ type: String,required: true},
  estacao:{ type: String,required: true},
  encontrar:{ type: String,required: false},
  dificuldade:{ type: String,required: true}
  
});
const Item = 
conexao.model("Item", ItemSchema);
export default Item;