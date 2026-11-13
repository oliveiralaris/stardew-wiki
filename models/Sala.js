import conexao from "../config/conexao.js";
const SalaSchema = new conexao.Schema({
  nome:{ type: String,required: true},
  recompensa:{ type: String,required: true},
  dica:{ type: String,required: true}
  
});
const Sala = 
conexao.model("Sala", SalaSchema);
export default Sala;

