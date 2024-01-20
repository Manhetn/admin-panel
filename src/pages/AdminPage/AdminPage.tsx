import { useEffect, useState } from 'react';

import useAppDispatch from 'src/core/hooks/useAppDispatch';
import {
  getSelectedUser,
  getUsersList,
  isUsersLoading,
  loadUserTransactions,
  loadUsers,
} from 'src/core/store/slice/usersSlice';
import useAppSelector from 'src/core/hooks/useAppSelector';
import { IUserData } from '@interfaces';
import { Chart, UserTable, UserTransactionsTable } from '@ui';
import { BaseAdminLayout } from '@layouts';
import { Backdrop, SearchInput, Drawer, Pagination } from '@common';
import './styles.scss';

const AdminPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(getUsersList());
  const selectedUser = useAppSelector(getSelectedUser());
  const isLoading = useAppSelector(isUsersLoading());

  const [search, setSearch] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  // const [visibleCurrentUsers]
  const [currentUsers, setCurrentUsers] = useState<IUserData[]>([]);

  const [showUsersDetailsDrawer, setUsersDetailsDrawer] = useState(false);

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handlePageChange = (selectedPage: { selected: number }) => {
    const startIndex = selectedPage.selected * 10;
    const endIndex = startIndex + 10;
    setCurrentUsers(usersList!.slice(startIndex, endIndex));
  };

  const handleShowUserDetails = (userData: IUserData) => {
    dispatch(loadUserTransactions(userData));
    setUsersDetailsDrawer(true);
  };

  useEffect(() => {
    if (!usersList) {
      dispatch(loadUsers());
    }
  }, []);

  useEffect(() => {
    if (usersList && usersList.length > 10) {
      setTotalPages(Math.ceil(usersList.length / 10));
      setCurrentUsers(usersList.slice(0, 10));
    }
  }, [usersList]);

  useEffect(() => {
    clearTimeout(searchTimer as ReturnType<typeof setTimeout>);

    setSearchTimer(
      setTimeout(() => {
        if (usersList) {
          const filteredUsers = usersList.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          );
          setTotalPages(Math.ceil(filteredUsers.length / 10));
          setCurrentUsers(filteredUsers.slice(0, 10));
        }
      }, 404)
    );
  }, [search]);

  return (
    <>
      <BaseAdminLayout>
        {isLoading && <></>}
        <h1 className="admin-page__title">Моя организация</h1>
        <h2 className="admin-page__subtitle">Пользователи</h2>
        <div className="admin-page__search-block">
          <SearchInput value={search} handleChange={setSearch} />
        </div>
        <div className="admin-page__table">
          <UserTable
            data={currentUsers}
            handleClickUser={(userData) => handleShowUserDetails(userData)}
          />
        </div>

        {totalPages !== 0 && (
          <div className="admin-page__pagination">
            <Pagination
              totalPages={totalPages}
              handlePageChange={() => handlePageChange}
            />
          </div>
        )}
      </BaseAdminLayout>

      <Backdrop
        isShow={showUsersDetailsDrawer}
        onClickHendler={() => setUsersDetailsDrawer(false)}
      >
        <Drawer
          isOpen={showUsersDetailsDrawer}
          title="testmail@gmail.com"
          handleClose={() => setUsersDetailsDrawer(false)}
        >
          <h3 className="admin-page__drawer-title">Использование токенов</h3>
          {selectedUser && <Chart data={selectedUser} />}
          <h4 className="admin-page__drawer-table-title">История операций</h4>
          {selectedUser && (
            <div className="admin-page__drawer-table">
              <UserTransactionsTable data={selectedUser.transactions} />
            </div>
          )}
        </Drawer>
      </Backdrop>
    </>
  );
};

export default AdminPage;
