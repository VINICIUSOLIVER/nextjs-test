import { TableTr } from "@/lib/interfaces/componentes/table";

export default function TableTr({ children, ...props }: TableTr) {
    return (
        <tr
            {...props}
        >
            {children}
        </tr>
    );
}