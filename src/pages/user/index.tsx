import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserWithId } from "../../api";
import { IUser } from "../../models";
import Image from "../../components/image";
import { Heading, UserInformationContainer } from "./user.styles";
import { IconChevronRight } from "@tabler/icons-react";
import Button from "../../components/button/button";

interface Props {}

const UserDetails: FC<Props> = () => {
  const { id } = useParams();

  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    if (!id) return null;

    const result = await getUserWithId(id);

    setUser(result);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  const renderUserData = () => {
    if (!user) return null;

    return (
      <UserInformationContainer>
        <Heading>
          <IconChevronRight />
          User Information
        </Heading>

        <div>
          <Image
            src={user.avatar}
            width={200}
            height={300}
            lazy
            alt={`${user.name} avatar`}
          />

          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Address: {user.address}</p>
          </div>
        </div>

        <Button onClick={() => history.back()}>Go back</Button>
      </UserInformationContainer>
    );
  };

  return (
    <div className="container">
      {loading && <div>Loading ...</div>}
      {!loading && !user && <div>User not found.</div>}
      {!loading && user && renderUserData()}
    </div>
  );
};

export default UserDetails;
