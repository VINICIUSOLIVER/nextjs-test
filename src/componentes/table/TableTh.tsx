import { TableTh } from "@/lib/interfaces/componentes/table";

export default function TableTh({ children, ...props }: TableTh) {
    return (
        <th
            {...props}
        >
            {children}
        </th>
    );
}