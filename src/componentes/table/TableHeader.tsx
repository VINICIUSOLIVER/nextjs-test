import { TableHeader } from "@/lib/interfaces/componentes/table";

export default function TableHeader({ children }: TableHeader) {
    return (
        <thead>
            {children}
        </thead>
    );
}