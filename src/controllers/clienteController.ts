import { NextApiRequest, NextApiResponse } from "next";
import ClienteRepository from "../respository/clienteRepository";

const clienteController = {
  cadastrarCliente: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      let { nome, data_nascimento, email, telefone } = JSON.parse(req.body);

      console.log(req.body);

      data_nascimento = data_nascimento !== "" ? data_nascimento : null;
      email = email !== "" ? email : null;
      telefone = telefone !== "" ? telefone : null;

      const novoCliente = await ClienteRepository.cadastrarCliente({
        nome,
        data_nascimento,
        email,
        telefone,
      });

      res.status(201)
        .json(novoCliente);
    } catch (error) {
      console.log(error);
      res.status(500)
        .json({
            error: "Erro ao cadastrar cliente"
        });
    }
  },
};

export default clienteController;
