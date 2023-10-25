import { ReactNode } from "react";

type ColumnType = 'string' | 'boolean';

interface IColumnTemplate<T> {
  title: string;
  width: string;
  type?: ColumnType;
  valueKey?: string;
  sortable: boolean;
  render?: (row: T) => ReactNode;
}

export type { IColumnTemplate, ColumnType };