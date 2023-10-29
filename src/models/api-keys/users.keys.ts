export const UsersApiKeys = {
    getUsers: 'userslist/records',
    getUser: (id: string) => `userslist/records/${id}`,
    getUserNote: (id: string) => `userslist/records/${id}?fields=note`,
    patchUserNote: (id: string) => `userslist/records/${id}`,
}