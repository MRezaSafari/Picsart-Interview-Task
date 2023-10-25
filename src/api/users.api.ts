import { IApiBaseModel, IUser, IUserFetch } from "../models";
import { getPocketBaseInstance } from "../utilities";

const getUsersCollectionWithFilters = async ({ perPage, page, filters }: IUserFetch) => {
  const result = (await getPocketBaseInstance()
    .collection("userslist")
    .getList(page, perPage, {
      filter: filters,
    })) as IApiBaseModel<IUser[]>;

  return result;
};

export { getUsersCollectionWithFilters };
