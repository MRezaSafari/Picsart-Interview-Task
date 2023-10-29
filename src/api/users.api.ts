import { IApiBaseModel, IUser, IUserFetch, ApiKeys } from "../models";
import { fetcher } from "../utilities";

const getUsersCollectionWithFilters = async ({
  perPage,
  page,
  filters,
  sortKey,
  sortDirection,
}: IUserFetch) => {
  const result = (await fetcher(ApiKeys.getUsers, "GET", {
    noCache: true,
    params: {
      perPage,
      page,
      ...(sortKey && {
        sort: `${sortDirection === "DESC" ? "-" : "+"}${sortKey}`,
      }),
      ...(filters && { filter: filters.join("&&") }),
    },
  })) as IApiBaseModel<IUser[]>;

  return result;
};

const getUserWithId = async (id: string) => {
  const result = (await fetcher(ApiKeys.getUser(id), "GET", {
    noCache: true,
  })) as IUser;

  return result;
};

export { getUsersCollectionWithFilters, getUserWithId };
