import { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes } from "react";
import { Children } from "../default";

export interface Table extends TableHTMLAttributes<HTMLTableElement> {}
export interface TableHeader extends Table {}
export interface TableBody extends Table {}
export interface TableFooter extends Table {}
export interface TableTr extends HTMLAttributes<HTMLTableRowElement> {}
export interface TableTd extends TdHTMLAttributes<HTMLTableCellElement> {}
export interface TableTh extends HTMLAttributes<HTMLTableCellElement> {}