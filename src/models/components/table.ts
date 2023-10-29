import { ReactNode } from "react";

type ColumnType = "string" | "boolean";

interface IColumnTemplate<T> {
  title: string;
  width: string;
  type?: ColumnType;
  valueKey?: string;
  sortable: boolean;
  render?: (row: T) => ReactNode;
}

interface ITableProps<T> {
  columns: IColumnTemplate<T>[];
  data: T[] | undefined;
  pagination?: {
    position: "top" | "bottom" | "both";
    totalItems: number;
    perPage: number;
    currentPage: number;
  };
}

export type { IColumnTemplate, ColumnType, ITableProps };
