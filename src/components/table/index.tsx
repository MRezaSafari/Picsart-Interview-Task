import React, { useEffect, useState } from "react";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { IColumnTemplate, ITableProps, OrderDirection } from "../../models";
import {
  Container,
  EmptyState,
  HeaderItem,
  PaginationContainer,
  PaginationItem,
  PaginationList,
} from "./table.styles";
import {
  Link,
  generatePath,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export const Table = <T,>({ columns, data, pagination }: ITableProps<T>) => {
  const navigate = useNavigate();
  const { page, sortKey, sortOrder } = useParams();

  const handleSort = (key: keyof T | undefined, order: OrderDirection) => {
    if (!key) return;

    navigate(
      generatePath("/users/:page?/:sortKey?/:sortOrder?", {
        sortKey: key.toString(),
        sortOrder: order,
        page: page ? page : null,
      })
    );
  };

  const handlePageChange = (page: number) => {
    navigate(
      generatePath("/users/:page?/:sortKey?/:sortOrder?", {
        page: page.toString(),
        sortKey: sortKey ? sortKey : null,
        sortOrder: sortOrder ? sortOrder : null,
      })
    );
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
                  onClick={() => handleSort(r.valueKey as keyof T, "ASC")}
                />
              </li>
              <li>
                <IconChevronDown
                  width={15}
                  height={15}
                  onClick={() => handleSort(r.valueKey as keyof T, "DESC")}
                />
              </li>
            </ul>
          )}
        </HeaderItem>
      </td>
    ));

  const renderRows = () =>
    data &&
    [...Array(data?.length).keys()].map((row: number) => (
      <tr key={`row-${row}`}>
        {columns.map((r: IColumnTemplate<T>) => (
          <td key={r.title.toLowerCase()} width={r.width}>
            {r.render && r.render((data as [])[row])}
            {r.type === "string" && r.valueKey && (data as [])[row][r.valueKey]}
          </td>
        ))}
      </tr>
    ));

  const renderPaginationItems = (page: number) => {
    return (
      <PaginationItem
        key={page}
        $active={page + 1 === pagination?.currentPage}
        onClick={() => handlePageChange(page + 1)}
      >
        {page + 1}
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
