import { ClienteSalvar } from "@/lib/interfaces/cliente";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Page() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ClienteSalvar>();

    const onSubmit: SubmitHandler<ClienteSalvar> = (data: ClienteSalvar) => {
        console.log(data);

        fetch("/api/cliente/", {
            method: "POST",
            body: JSON.stringify(data)
        });

        return false;
    }

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-6">
                    <h1>Clientes</h1>
                </div>
                <div className="float-end">
                    <Link
                        href="/cliente"
                        className="btn btn-dark"
                    >
                        Voltar para listagem
                    </Link>
                </div>

            </div>
            <Form 
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        {...register("nome")}
                        type="text" 
                        placeholder="Nome" 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="data_nascimento">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control 
                        {...register("data_nascimento")}
                        type="date" 
                        placeholder="Data de nascimento" 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        {...register("email")}
                        type="text" 
                        placeholder="Email" 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control 
                        {...register("telefone")}
                        type="text" 
                        placeholder="Telefone" 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Salvar cliente
                </Button>
            </Form>
        </div>
    )
}