import { BaseAdminLayout } from '@layouts';
import './styles.scss';

const AdminPage: React.FC = () => {
  return (
    <BaseAdminLayout>
      <h1 className="admin-page__title">Моя организация</h1>
      <h2 className="admin-page__subtitle">Пользователи</h2>
      <div className=""></div>
      <div className=""></div>
    </BaseAdminLayout>
  );
};

export default AdminPage;
