import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableTr from "./TableTr";
import TableTh from "./TableTh";
import TableTd from "./TableTd";
import { Table as TableInterface } from "@/lib/interfaces/componentes/table";

function Table({ children, ...props }: TableInterface) {
    return (
        <table 
            {...props} 
            className={"table " + props.className ?? ""}
        >
            {children}
        </table>
    );
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Tr = TableTr;
Table.Th = TableTh;
Table.Td = TableTd;

export default Table;