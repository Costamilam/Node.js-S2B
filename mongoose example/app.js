const Mongoose = require('mongoose');
const {Livro, Autor, Emprestimo} = require('./esquemas');
const url = 'mongodb://localhost:27017/biblioteca';

async function inicializar() {
    let cliente;
    try {
        cliente = await Mongoose.connect(url);
        console.log('Conectado com sucesso');
        console.log('Adicionando autores...');
        let a1 = new Autor({ primeiro_nome: 'John', ultimo_nome: 'Doe' });
        await a1.save();
        let a2 = new Autor({ primeiro_nome: 'Mary', ultimo_nome: 'Doe' });
        await a2.save();
        console.log('Adicionando livros...');
        let l1 = new Livro({ titulo: 'JavaScript Legal', autores: a1 });
        await l1.save();
        let l2 = new Livro({ titulo: 'JavaScript Outra Vez', autores: [a1,a2] });
        await l2.save();
    } catch(e) {
        console.log(`Erro: ${e.message}`);
    } finally {
        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    }
}

inicializar();