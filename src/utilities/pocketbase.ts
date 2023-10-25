import PocketBase from "pocketbase";

const getPocketBaseInstance = () => {
  const pb = new PocketBase(process.env.API_URL);

  return pb;
};

export { getPocketBaseInstance };
