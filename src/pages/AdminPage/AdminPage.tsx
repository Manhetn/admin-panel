import { useEffect, useState } from 'react';

import { IPaginationSelectedPage, IUserData } from '@interfaces';
import {
  getSelectedUser,
  getUsersList,
  isUsersLoading,
  loadUserTransactions,
  loadUsers,
} from '@store';
import { useAppDispatch, useAppSelector } from '@hooks';
import { BaseAdminLayout } from '@layouts';
import { Backdrop, SearchInput, Drawer, Pagination } from '@common';
import { Chart, UserTable, UserTransactionsTable } from '@ui';
import './styles.scss';
import { toggleBodyScroll } from '@utils';
import { TSortOrder } from '@types';

const AdminPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(getUsersList());
  const selectedUser = useAppSelector(getSelectedUser());
  const isLoading = useAppSelector(isUsersLoading());

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [users, setUsers] = useState<IUserData[]>([]);
  const [currentUsers, setCurrentUsers] = useState<IUserData[]>([]);

  const [showUsersDetailsDrawer, setUsersDetailsDrawer] = useState(false);

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const getSortedUsers = (sortOrder: TSortOrder): IUserData[] => {
    return [...users].sort((a, b) => {
      const aValue = a.subscription.tokens;
      const bValue = b.subscription.tokens;

      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
  };

  const getFilteredUsers = (users: IUserData[]): IUserData[] => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleSortUsers = (sortOrder: TSortOrder) => {
    let sortedUsers = getSortedUsers(sortOrder);

    if (search.length) {
      sortedUsers = getFilteredUsers(sortedUsers);
    }

    setUsers(sortedUsers);
  };

  const handlePageChange = (selectedPage: IPaginationSelectedPage) => {
    const { selected } = selectedPage;
    const startIndex = selected * 10;
    const endIndex = startIndex + 10;

    setCurrentPage(selected);
    setCurrentUsers(users!.slice(startIndex, endIndex));
  };

  const handleShowUserDetails = (userData: IUserData) => {
    dispatch(loadUserTransactions(userData));
    setUsersDetailsDrawer(true);
    toggleBodyScroll(true);
  };

  useEffect(() => {
    if (!usersList) {
      dispatch(loadUsers());
    }
  }, []);

  useEffect(() => {
    if (usersList) {
      setUsers(usersList);
    } else {
      setUsers([]);
    }
  }, [usersList]);

  useEffect(() => {
    if (users.length > 10) {
      setTotalPages(Math.ceil(users.length / 10));
      setCurrentUsers(users.slice(0, 10));
    } else {
      setCurrentUsers(users);
    }
    setCurrentPage(0);
  }, [users]);

  useEffect(() => {
    clearTimeout(searchTimer as ReturnType<typeof setTimeout>);

    setSearchTimer(
      setTimeout(() => {
        if (users.length) {
          const filteredUsers = getFilteredUsers(users);
          setTotalPages(Math.ceil(filteredUsers.length / 10));
          setCurrentUsers(filteredUsers.slice(0, 10));
        }
      }, 404)
    );
  }, [search]);

  return (
    <>
      <BaseAdminLayout>
        <h1 className="admin-page__title">Моя организация</h1>
        <h2 className="admin-page__subtitle">Пользователи</h2>
        <div className="admin-page__search-block">
          <SearchInput value={search} handleChange={setSearch} />
        </div>
        {isLoading ? (
          <h3 className="admin-page__loading">Загрузка...</h3>
        ) : (
          <>
            <div className="admin-page__table">
              <UserTable
                data={currentUsers}
                handleClickUser={(userData) => handleShowUserDetails(userData)}
                handleSortUser={(sortOrder) => handleSortUsers(sortOrder)}
              />
            </div>

            {totalPages !== 0 && (
              <div className="admin-page__pagination">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePageChange={handlePageChange}
                />
              </div>
            )}
          </>
        )}
      </BaseAdminLayout>

      <Backdrop
        isShow={showUsersDetailsDrawer}
        onClickHendler={() => {
          setUsersDetailsDrawer(false);
          toggleBodyScroll(false);
        }}
      >
        <Drawer
          isOpen={showUsersDetailsDrawer}
          title="testmail@gmail.com"
          handleClose={() => {
            setUsersDetailsDrawer(false);
            toggleBodyScroll(false);
          }}
        >
          {isLoading ? (
            <h3 className="admin-page__loading">Загрузка...</h3>
          ) : (
            <>
              <h3 className="admin-page__drawer-title">
                Использование токенов
              </h3>
              {selectedUser && <Chart data={selectedUser} />}
              <h4 className="admin-page__drawer-table-title">
                История операций
              </h4>
              {selectedUser && (
                <div className="admin-page__drawer-table">
                  <UserTransactionsTable data={selectedUser.transactions} />
                </div>
              )}
            </>
          )}
        </Drawer>
      </Backdrop>
    </>
  );
};

export default AdminPage;
