import conexao from "../config/conexao.js";
const NpcSchema = new conexao.Schema({
  nome:{ type: String,required: true},
  aniversario:{ type: String,required: false},
  presente:{ type: String,required: true},
  dica:{ type: String,required: false}
  
});
const Npc = 
conexao.model("Npc", NpcSchema);
export default Npc;

