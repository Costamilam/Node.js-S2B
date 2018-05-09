const Mongoose = require('mongoose');
const {Usuario, Produto, Pedido} = require('./esquemas');
const url = 'mongodb://localhost:27017/biblioteca';

(async function() {
    let conexao;
    try {
        conexao = await Mongoose.connect(url);
        console.log('Conectado com sucesso');
        
        function adicionarProduto(produto) {
            let produto = new Produto(produto);
            produto.save();
        }

        function adicionarUsuario(usuario) {
            let usuario = new Usuario(usuario);
            usuario.save();
        }

        function adicionarPedido(pedido) {
            let pedido = new Pedido(pedido);
            pedido.save();
        }

        function buscarPedido(pedido) {
            let pedido = Pedido.find();
            return pedido.exec();
        }

        function buscarUsuario(Usuario) {
            let usuario = Usuario.find();
            return usuario.exec();
        }

        function buscarProduto(Produto) {
            let produto = Produto.find();
            return produto.exec();
        }

        adicionarUsuario({nome: 'Gui', email: 'a', senha: 'a', telefone: 'a'});
        let consulta = await buscarUsuario();

        console.log(consulta);

    } catch(e) {
        console.log(`Erro: ${e.message}`);
    } finally {
        if (conexao && conexao.connection) {
            conexao.connection.close();
        }
    }
})();