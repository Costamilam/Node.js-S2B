Promise.prototype.toString = function() {
    let str = '{\n';

    for(let elemento of Object.keys(this)) {
        str += `${elemento}: ${this[elemento]},\n`
    }

    return `${str.trim(',\n', '')}\n}`;
}

const Mongoose = require('mongoose');
const {Usuario, Produto, Pedido} = require('./esquemas');
const url = 'mongodb://localhost:27017/usuProPed';

(async function() {
    let conexao;
    try {
        conexao = await Mongoose.connect(url);
        console.log('Conectado com sucesso');
        
        let produto;
        let usuario;
        let pedido;

        function adicionarProduto(produto) {
            produto = new Produto(produto);
            produto.save();
        }

        function adicionarUsuario(usuario) {
            usuario = new Usuario(usuario);
            usuario.save();
        }

        function adicionarPedido(pedido) {
            pedido = new Pedido(pedido);
            pedido.save();
        }

        function buscarPedido() {
            pedido = Pedido.find();
            return pedido.exec();
        }

        function buscarUsuario() {
            usuario = Usuario.find();
            return usuario.exec();
        }

        function buscarProduto() {
            produto = Produto.find();
            return produto.exec();
        }

        adicionarUsuario({nome: 'Gui', email: 'a@a.a', senha: 'asasasaa', telefone: '123456789'});
        adicionarProduto({nome: 'tal', descricao: 'uma la', valor: 2});
        adicionarPedido({usuario: '5af48362869e581a8c35b39f', produtos: [{produto: '5af48362869e581a8c35b3a0', quantidade: 3}], dataEntrega: '2018-05-29 16:30:42'});

        console.log(await buscarUsuario().toString());
        console.log(await buscarProduto().toString());
        console.log(await buscarPedido().toString());
    } catch(e) {
        console.log(`Erro: ${e.message}`);
    } finally {
        if (conexao && conexao.connection) {
            conexao.connection.close();
        }
    }
})();