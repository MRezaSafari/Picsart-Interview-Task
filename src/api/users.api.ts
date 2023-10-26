import { IApiBaseModel, IUser, IUserFetch, ApiKeys } from "../models";
import { fetcher } from "../utilities";

const getUsersCollectionWithFilters = async ({
  perPage,
  page,
  filters,
}: IUserFetch) => {
  const result = (await fetcher(ApiKeys.getUsers, "GET", {
    noCache: true,
    params: {
      perPage,
      page,
    },
  })) as IApiBaseModel<IUser[]>;


  return result;
};

export { getUsersCollectionWithFilters };
