import React, { FC, useEffect, useState } from "react";
import Table from "../../components/table";
import { IApiBaseModel, IColumnTemplate, IUser } from "../../models";
import { getUsersCollectionWithFilters } from "../../api";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

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
      <div style={{display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center'}}>
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

  const getUsers = async () => {
    setLoading(true);

    const result = await getUsersCollectionWithFilters({
      page: 1,
      perPage: 10,
      filters: "",
    });

    setUsers(result.items);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      {!loading && <Table columns={tableColumns} data={users} />}
    </div>
  );
};

export default UsersList;
