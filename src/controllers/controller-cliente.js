const { response } = require("express")

const Usuario = require('../models/Cliente')

const {bdCliente } = require('../estrutura/bd')



class ClienteController {
    static rotas(app) {
        //GET
        app.get('/Cliente', controllerCliente.listarCliente) // chama a rota GET
    

        //POST 
        app.post('./Cliente', controllerCliente.CadastrarCliente) // chama a rota POST
        }

        //GET
    static listarCliente(req, res) {
        res.send(bdCliente)
    }    

    //POST
    static CadastrarCliente(req, res) {
      //  const cliente = req.body // recebe os dados vindo do corpo da aquisiçao
      const cliente = new Cliente(req.body.nome, req.body.email, req.body.tel, req.body.end)
      bdCliente.push(cliente)
        res.send(cliente) // responde a requisiçao
      }

      static buscarClienteEmail(req, res) {
        // Buscar o gmail na lista de clientes
      const cliente = bdCliente.find(
        (cliente) => cliente.email === req.params.email
        );

        //se o cliente nao for encontrado devolva um erro
        if (!cliente) {
            res.sed("cliente não encontrado");
            return;
        }
        //se o cliente for encontrado devolva o cliente
        res.send(cliente);
    
        
        app.delete("/cliente/:email", ControllerCliente.deletarCliente); // deleta pelo email
        //DELETE
        static deletarCliente(req, res) {
            //busca o email na lista de clientes
            const cliente = bdCliente.find((cliente) => cliente.email ===
            req.params.email
            );
            // se o cliente nao for encontado devolva um erro 
            if (!cliente) {
                res.send("cliente nao encontrado");
                return
            }
            //se o cliente for encontrado delete o cliente 
            const index = bdCliente.indexOf(cliente);
            bdCliente.splice(index, 1);
            //devolva o cliente deletado
            res.send({
                "mensagem: ": `o cliente d email ${cliente.email} foi deletado`,
            });


        }


    }
    

    



module.exports = controlerCliente
