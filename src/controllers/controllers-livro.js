const { response } = require("express")

const { bdLivro } = require('../estrutura/bd')

class LivroController {
    static rotas(app) {
        app.get('/Livro', (req, res) => {
            res.send("ROTA GET do Livro ativada")
    })

    }
    static buscarLivroGenero(req, res) {
        // Buscar o genero na lista de livros
    const livro = bdLivro.find(
        (livro) => livro.genero === req.params.email
        );

        //se o front nao for encontrado devolva um erro
        if (!livro) {
            res.sed("livro não encontrado");
            return;
        }
        //se o livro for encontrado devolva o livro
        res.semd(livro);


}    

module.exports = controlerLivro 
