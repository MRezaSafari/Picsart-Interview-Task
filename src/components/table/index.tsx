import React, { useEffect, useState } from "react";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { IColumnTemplate } from "../../models";
import { Container, EmptyState, HeaderItem } from "./table.styles";

export interface TableProps<T> {
  columns: IColumnTemplate<T>[];
  data: T[];
}

export const Table = <T,>({ columns, data }: TableProps<T>) => {
  const [sortedData, setSortedData] = useState<T[]>(data);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (key: string | undefined, order: "ASC" | "DESC") => {
    if (!key) return;
    const newData = Object.assign([], data);

    if (order === "ASC") newData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    if (order === "DESC") newData.sort((a, b) => (a[key] < b[key] ? 1 : -1));

    setSortedData(newData);
  };

  const renderHeaders = () =>
    columns.map((r) => (
      <td key={r.title.toLowerCase()} width={r.width}>
        <HeaderItem>
          <span>{r.title}</span>
          {r.sortable && r.valueKey && (
            <ul>
              <li>
                <IconChevronUp
                  width={15}
                  height={15}
                  onClick={() => handleSort(r.valueKey, "ASC")}
                />
              </li>
              <li>
                <IconChevronDown
                  width={15}
                  height={15}
                  onClick={() => handleSort(r.valueKey, "DESC")}
                />
              </li>
            </ul>
          )}
        </HeaderItem>
      </td>
    ));

  const renderRows = () =>
    [...Array(sortedData.length).keys()].map((row: number) => (
      <tr key={`row-${row}`}>
        {columns.map((r: IColumnTemplate<T>) => (
          <td key={r.title.toLowerCase()} width={r.width}>
            {r.render && r.render((sortedData as [])[row])}
            {r.type === "string" &&
              r.valueKey &&
              (sortedData as [])[row][r.valueKey]}
          </td>
        ))}
      </tr>
    ));

  return (
    <Container>
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        {data.length > 0 && <tbody>{renderRows()}</tbody>}
      </table>
      {data.length === 0 && <EmptyState>No Data!</EmptyState>}
    </Container>
  );
};

export default Table;
