import Table from "@/componentes/table/Table";
import Link from "next/link";

export default function Page() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6">
                    <h1>Clientes</h1>
                </div>
                <div className="float-end">
                    <Link
                        href="/cliente/novo"
                        className="btn btn-primary"
                    >
                        Novo cliente
                    </Link>
                </div>
            </div>
            <Table
                className="table-striped"
            >
                <Table.Header>
                    <Table.Tr>
                        <Table.Th>
                            Nome
                        </Table.Th>
                    </Table.Tr>
                </Table.Header>
                <Table.Body>
                    <Table.Tr>
                        <Table.Td>
                            Nome
                        </Table.Td>
                    </Table.Tr>
                </Table.Body>
            </Table>
        </div>
    )
}