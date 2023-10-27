import React, { FC, useEffect, useState } from "react";
import Table from "../../components/table";
import {
  IApiBaseModel,
  IColumnTemplate,
  IUser,
  IUserFetch,
} from "../../models";
import { getUsersCollectionWithFilters } from "../../api";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import { Heading } from "./users.styles";
import { IconChevronRight } from "@tabler/icons-react";

interface Props {}

const tableColumns: IColumnTemplate<IUser>[] = [
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
];

const UsersList: FC<Props> = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<IUserFetch>({
    page: 1,
    perPage: 10,
  });

  const getUsers = async (filters: IUserFetch) => {
    setLoading(true);

    const result = await getUsersCollectionWithFilters(filters);

    // page: 1,
    // perPage: 10,
    // sortKey: "age",
    // sortDirection: "DESC",
    // filters: [`email~"%kelly%"`, "age>33"],

    setUsers(result.items);
    setLoading(false);
  };

  useEffect(() => {
    getUsers(filters);
  }, [filters]);

  useEffect(() => {
    getUsers(filters);
  }, []);

  return (
    <div className="container">
      <Heading>
        <IconChevronRight />
        Users List
      </Heading>
      {!loading && <Table columns={tableColumns} data={users} />}
    </div>
  );
};

export default UsersList;
