import { TableFooter } from "@/lib/interfaces/componentes/table";

export default function TableFooter({ children }: TableFooter) {
    return (
        <tfoot>
            {children}
        </tfoot>
    );
}