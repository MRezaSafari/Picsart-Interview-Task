import React, { FC } from "react";
import { useParams } from "react-router-dom";

interface Props {}

const UserDetails: FC<Props> = () => {
  const params = useParams();
  return <>{JSON.stringify(params)}</>;
};

export default UserDetails;
