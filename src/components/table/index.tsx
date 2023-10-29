import React, { useEffect, useState } from "react";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { IColumnTemplate, ITableProps } from "../../models";
import {
  Container,
  EmptyState,
  HeaderItem,
  PaginationContainer,
  PaginationItem,
  PaginationList,
} from "./table.styles";
import { Link } from "react-router-dom";

export const Table = <T,>({ columns, data, pagination }: ITableProps<T>) => {
  const [sortedData, setSortedData] = useState<T[]>(data || []);

  useEffect(() => {
    setSortedData(data || []);
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
    sortedData &&
    [...Array(sortedData?.length).keys()].map((row: number) => (
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

  const renderPaginationItems = (page: number) => {
    return (
      <PaginationItem key={page} $active={page + 1 === pagination?.currentPage}>
        <Link to={`#page=${[page + 1]}`}>{page + 1}</Link>
      </PaginationItem>
    );
  };

  const renderPaginations = () => {
    // it should not render pagination if we have less items than perPage value
    if (!pagination || pagination.totalItems < pagination.perPage) return;

    const totalPages = Math.ceil(pagination.totalItems / pagination.perPage);

    return (
      <PaginationContainer>
        <p>
          Showing {pagination?.perPage} out of {pagination?.totalItems}
        </p>
        <PaginationList>
          {[...Array(totalPages).keys()].map((p) => renderPaginationItems(p))}
        </PaginationList>
      </PaginationContainer>
    );
  };

  return (
    <Container>
      {data &&
        pagination &&
        (pagination?.position === "top" || pagination?.position === "both") &&
        renderPaginations()}

      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        {data && data?.length > 0 && <tbody>{renderRows()}</tbody>}
      </table>
      {data &&
        pagination &&
        (pagination?.position === "bottom" ||
          pagination?.position === "both") &&
        renderPaginations()}
      {(typeof data === "undefined" || data?.length === 0) && (
        <EmptyState>No Data!</EmptyState>
      )}
    </Container>
  );
};

export default Table;
