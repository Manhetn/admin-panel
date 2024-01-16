import { useState } from 'react';
import { BaseAdminLayout } from '@layouts';
import { SearchInput } from '@common';
import { IUserData } from '@interfaces';
import UserTable from 'src/components/ui/UserTable/UserTable';
import './styles.scss';
import ReactPaginate from 'react-paginate';

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
          previousLabel={'←'}
          nextLabel={'→'}
          breakLabel={'...'}
          // breakClassName={'break-me'}
          pageCount={104}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </BaseAdminLayout>
  );
};

export default AdminPage;
