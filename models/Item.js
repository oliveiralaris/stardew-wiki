import conexao from "../config/conexao.js";
const ItemSchema = new conexao.Schema({
  nome:{ type: String,required: true},
  estacao:{ type: String,required: true},
  onde_encontrar:{ type: String,required: true},
  dificuldade:{ type: String,required: true},
  foto:{type: Buffer,
  get: (valor) => {
           if (!valor) return null;
             return `data:image/png;base64,${valor.toString('base64')}`;
         }
      }
});
const Item = 
conexao.model("Item", ItemSchema);
export default Item;
