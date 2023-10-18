import { TableBody } from "@/lib/interfaces/componentes/table";

export default function TableBody({ children }: TableBody) {
    return (
        <tbody>
            {children}
        </tbody>
    );
}