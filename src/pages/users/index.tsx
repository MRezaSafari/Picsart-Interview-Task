import React, { Suspense, useEffect, useMemo, useState } from "react";
import {
  IApiBaseModel,
  IColumnTemplate,
  ITableProps,
  IUser,
  IUserFetch,
} from "../../models";
import { getUsersCollectionWithFilters } from "../../api";
import Button from "../../components/button/button";
import { Link, useLocation } from "react-router-dom";
import { Heading } from "./users.styles";
import { IconChevronRight } from "@tabler/icons-react";
import { lazy } from "react";
import { parse } from "querystring";

const LazyTable = lazy<React.FC<ITableProps<IUser>>>(() => import("../../components/table"));

const UsersList = () => {
  const tableColumns: IColumnTemplate<IUser>[] = useMemo(
    () => [
      {
        sortable: true,
        title: "Name",
        type: "string",
        valueKey: "name",
        width: "150px",
      },
      {
        sortable: true,
        title: "Email",
        type: "string",
        valueKey: "email",
        width: "150px",
      },
      {
        sortable: true,
        title: "Age",
        type: "string",
        valueKey: "age",
        width: "50px",
      },
      {
        sortable: true,
        title: "Actions",
        width: "100px",
        render: (row) => (
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => {
                alert(row.age);
              }}
            >
              Add Note
            </Button>
            <Link to={`/user/${row.id}`}>Details</Link>
          </div>
        ),
      },
    ],
    []
  );

  const [fetchResult, setFetchResult] = useState<IApiBaseModel<IUser[]>>();
  const { hash } = useLocation();
  const [filters, setFilters] = useState<IUserFetch>({
    page: 1,
    perPage: 10,
  });

  const getUsers = async () => {
    const hashOptions = parse(hash);

    const newFilters = { ...filters };

    if (hashOptions["#page"]) newFilters.page = +hashOptions["#page"];

    setFilters(newFilters);

    try {
      const result = await getUsersCollectionWithFilters(filters);
      setFetchResult(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Optionally set some state to show an error message to the user
    }
    // page: 1,
    // perPage: 10,
    // sortKey: "age",
    // sortDirection: "DESC",
    // filters: [`email~"%kelly%"`, "age>33"],
  };

  useEffect(() => {
    getUsers();
  }, [hash]);

  return (
    <div className="container">
      <Heading>
        <IconChevronRight />
        Users List
      </Heading>
      <Suspense fallback={<div>Loading ...</div>}>
        <LazyTable
          columns={tableColumns}
          data={fetchResult?.items}
          pagination={{
            totalItems: fetchResult?.totalItems || 0,
            perPage: filters.perPage,
            currentPage: filters.page,
            position: "both",
          }}
        />
      </Suspense>
    </div>
  );
};

export default UsersList;
