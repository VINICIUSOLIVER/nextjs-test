import Cliente from "@/models/Cliente";

class ClienteRepository {
    cadastrarCliente = async (clienteData: any) => {
      const novoCliente = await Cliente.create(clienteData);
      return novoCliente;
    };
  }
  
  export default new ClienteRepository();