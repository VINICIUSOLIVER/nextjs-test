import { TableTd } from "@/lib/interfaces/componentes/table";

export default function TableHeader({ children, ...props }: TableTd) {
    return (
        <td
            {...props}
        >
            {children}
        </td>
    );
}