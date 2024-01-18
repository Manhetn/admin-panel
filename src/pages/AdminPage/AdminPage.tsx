import { useEffect, useState } from 'react';
import { BaseAdminLayout } from '@layouts';
import { Backdrop, SearchInput } from '@common';

import './styles.scss';
import ReactPaginate from 'react-paginate';
import { IconPaginationArrowLeft, IconPaginationArrowRight } from '@icons';
import useAppDispatch from 'src/core/hooks/useAppDispatch';
import {
  getUsersList,
  isUsersLoading,
  loadUsers,
} from 'src/core/store/slice/usersSlice';
import useAppSelector from 'src/core/hooks/useAppSelector';
import { IUserData } from '@interfaces';
import { Drawer, UserTable } from '@ui';

const AdminPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(getUsersList());
  const isLoading = useAppSelector(isUsersLoading());

  const [search, setSearch] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [currentUsers, setCurrentUsers] = useState<IUserData[]>([]);

  const [showUsersDetailsDrawer, setUsersDetailsDrawer] = useState(true);

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handlePageChange = (selectedPage: { selected: number }) => {
    const startIndex = selectedPage.selected * 10;
    const endIndex = startIndex + 10;
    setCurrentUsers(usersList!.slice(startIndex, endIndex));
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
          {currentUsers ? <UserTable data={currentUsers} /> : <></>}
        </div>

        {currentUsers.length > 10 && (
          <div className="admin-page__pagination">
            <ReactPaginate
              previousLabel={
                <IconPaginationArrowLeft stylesClass="pagination__icon" />
              }
              nextLabel={
                <IconPaginationArrowRight stylesClass="pagination__icon" />
              }
              breakLabel={'....'}
              pageCount={totalPages}
              marginPagesDisplayed={1}
              pageRangeDisplayed={4}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              pageClassName={'pagination__page'}
              pageLinkClassName={'pagination__button'}
              breakClassName={'pagination__break'}
              activeClassName={'pagination__page pagination__page_active'}
              previousClassName={'pagination__arrow'}
              nextClassName={'pagination__arrow'}
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
        </Drawer>
      </Backdrop>
    </>
  );
};

export default AdminPage;
