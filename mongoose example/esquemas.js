const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Livro = Schema(
    {
        titulo: { type: String, required: true },
        autores: [{ type: Schema.ObjectId, ref: 'Autor' }]
    }
);
exports.Livro = mongoose.model('Livro', Livro);

const Autor = Schema(
    {
        primeiro_nome: { type: String, required: true, max: 100 },
        ultimo_nome: { type: String, required: true, max: 100 }
    }
);
exports.Autor = mongoose.model('Autor', Autor);

const Emprestimo = Schema(
    {
        livro: { type: Schema.ObjectId, ref: 'Livro', required: true },
        status: { type: String, required: true, enum: ['Disponivel', 'Emprestado'], default: 'Disponivel' },
        dataEntrega: { type: Date, default: Date.now }
    }
);
exports.Emprestimo = mongoose.model('Emprestimo', Emprestimo);