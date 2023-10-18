import { NextApiRequest, NextApiResponse } from 'next';
import clientesController from "../../../controllers/clienteController";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("caiu aqui");

    if (req.method === "POST") {
        console.log("POST");

        try {
            return clientesController.cadastrarCliente(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500)
                .json({
                    erro: "Erro ao salvar cliente."
                });
        }
    }

    if (req.method === "GET") {
        try {
            return clientesController.cadastrarCliente(req, res);
        } catch (error) {
            return res.status(500)
                .json({
                    erro: "Erro ao salvar cliente."
                });
        }
    }

    return res.status(404).end();
};
