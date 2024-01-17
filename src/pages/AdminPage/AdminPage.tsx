import { useState } from 'react';
import { BaseAdminLayout } from '@layouts';
import { SearchInput } from '@common';
import { IUserData } from '@interfaces';
import UserTable from 'src/components/ui/UserTable/UserTable';
import './styles.scss';
import ReactPaginate from 'react-paginate';
import { IconPaginationArrowLeft, IconPaginationArrowRight } from '@icons';
// import 'react-paginate/dist/react-paginate.css';

const UserData: IUserData[] = [
  {
    email: 'string',
    name: 'string',
    role: 'string',
    subscription: 'string',
    tokens: 'string',
    actions: 'string',
  },
  {
    email: 'string',
    name: 'string',
    role: 'string',
    subscription: 'string',
    tokens: 'string',
    actions: 'string',
  },
  {
    email: 'string',
    name: 'string',
    role: 'string',
    subscription: 'string',
    tokens: 'string',
    actions: 'string',
  },
];

const AdminPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const handlePageChange = () => {};

  return (
    <BaseAdminLayout>
      <h1 className="admin-page__title">Моя организация</h1>
      <h2 className="admin-page__subtitle">Пользователи</h2>
      <div className="admin-page__search-block">
        <SearchInput value={search} handleChange={setSearch} />
      </div>
      <div className="admin-page__table">
        <UserTable data={UserData} />
      </div>
      <div className="admin-page__pagination">
        <ReactPaginate
          previousLabel={
            <IconPaginationArrowLeft stylesClass="pagination__icon" />
          }
          nextLabel={
            <IconPaginationArrowRight stylesClass="pagination__icon" />
          }
          breakLabel={'....'}
          pageCount={104}
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
    </BaseAdminLayout>
  );
};

export default AdminPage;
