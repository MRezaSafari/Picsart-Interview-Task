import React, {
  ChangeEvent,
  Suspense,
  useEffect,
  useMemo,
  useState,
  startTransition,
} from "react";
import {
  IApiBaseModel,
  IColumnTemplate,
  ITableProps,
  IModalProps,
  IUser,
  IUserFetch,
  OrderDirection,
} from "../../models";
import {
  getUserNoteWithId,
  getUsersCollectionWithFilters,
  updateUserNote,
} from "../../api";
import Button from "../../components/button/button";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Heading,
  ModalButtonContainer,
  ModalContentsContainer,
  SearchContainer,
} from "./users.styles";
import { IconChevronRight, IconNote, IconNoteOff } from "@tabler/icons-react";
import { lazy } from "react";
import { debounce } from "../../utilities";

const LazyModal = lazy<React.FC<IModalProps>>(
  () => import("../../components/modal")
);

const LazyTable = lazy<React.FC<ITableProps<IUser>>>(
  () => import("../../components/table")
);

const UsersList = (props: any) => {
  const { page, sortKey, sortOrder } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [isLoadingUserNote, setLoadingUserNote] = useState<boolean>(false);
  const [isSavingUserNote, setIsSavingUserNote] = useState<boolean>(false);
  const [userNote, setUserNote] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
        sortable: false,
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
        sortable: false,
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
            {row.note && row.note.length > 0 && <IconNote />}
            {row.note.length === 0 && <IconNoteOff color={"#bcbcbc"} />}
            <Button
              onClick={() => {
                setSelectedUser(row.id);
                fetchUserNote(row.id);
                setIsModalOpen(true);
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
  const [filters, setFilters] = useState<IUserFetch>({
    page: 1,
    perPage: 10,
  });

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const result = await getUsersCollectionWithFilters(filters);
      startTransition(() => {
        setFetchResult(result);
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      // Optionally set some state to show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [filters]);

  useEffect(() => {
    startTransition(() => {
      setFilters({
        ...filters,
        page: page ? +page : filters.page,
        sortKey: sortKey ? (sortKey as keyof IUser) : filters.sortKey,
        sortDirection: sortOrder
          ? (sortOrder as OrderDirection)
          : filters.sortDirection,
      });
    });
  }, [page, sortKey, sortOrder]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setFilters({
        ...filters,
        filters: [`name~"%${e.target.value}%"`],
      });
    });
  };

  const debouncedOnChange = debounce(onChange, 1000);

  const fetchUserNote = async (selectedUser: string) => {
    setLoadingUserNote(true);
    try {
      const result = await getUserNoteWithId(selectedUser);
      startTransition(() => {
        setUserNote(result.note);
      });
    } finally {
      setLoadingUserNote(false);
    }
  };

  const handleSaveUserNote = async (mode: "edit" | "delete") => {
    setIsSavingUserNote(true);

    await updateUserNote(selectedUser, mode === "edit" ? userNote : "");
    await getUsers();

    setIsSavingUserNote(false);

    setUserNote("");
    setSelectedUser("");
    setIsModalOpen(false);
  };

  const renderModalContents = () => (
    <ModalContentsContainer>
      {isLoadingUserNote && <div>Loading ...</div>}
      {!isLoadingUserNote && (
        <>
          <textarea
            onChange={(e) => setUserNote(e.target.value)}
            defaultValue={userNote}
            placeholder="note..."
          />
          <ModalButtonContainer>
            <Button
              mode="danger"
              loading={isSavingUserNote}
              onClick={() => handleSaveUserNote("delete")}
            >
              Delete note
            </Button>
            <Button
              loading={isSavingUserNote}
              onClick={() => handleSaveUserNote("edit")}
            >
              Save
            </Button>
          </ModalButtonContainer>
        </>
      )}
    </ModalContentsContainer>
  );

  return (
    <div className="container">
      <Suspense fallback={<div>Loading ...</div>}>
        <LazyModal
          title="User Note"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          {renderModalContents()}
        </LazyModal>
      </Suspense>

      <Heading>
        <IconChevronRight />
        Users List
      </Heading>

      <SearchContainer>
        <p>Search by name:</p>
        <input type="search" onChange={debouncedOnChange} />
      </SearchContainer>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </div>
  );
};

export default UsersList;
