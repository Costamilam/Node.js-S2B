const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Esquema da coleção de usuário
const Usuario = Schema(
    {
        nome: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true },
        telefone: { type: String, required: true },
    }
);
exports.Usuario = mongoose.model('Usuario', Usuario);

//Esquema da coleção de produto
const Produto = Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String, required: true },
        valor: { type: Number, required: true }
    }
);
exports.Produto = mongoose.model('Produto', Produto);

//Esquema da coleção de pedido
const Pedido = Schema(
    {
        usuario: { type: Schema.ObjectId, ref: 'Usuario', required: true },
        produtos: [{produto: { type: Schema.ObjectId, ref: 'Produto', required: true }, quantidade: { type: Number, required: true}}],
        dataPedido: { type: Date, default: Date.now, required: true },
        dataEntrega: { type: Date, required: true }
    }
);
exports.Pedido = mongoose.model('Pedido', Pedido);