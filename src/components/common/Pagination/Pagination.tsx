import React from 'react';
import ReactPaginate from 'react-paginate';

import { IPaginationSelectedPage } from '@interfaces';
import { IconPaginationArrowLeft, IconPaginationArrowRight } from '@icons';
import './styles.scss';

interface IPaginationProps {
  totalPages: number;
  handlePageChange: (value: IPaginationSelectedPage) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  totalPages,
  handlePageChange,
}) => {
  return (
    <ReactPaginate
      previousLabel={<IconPaginationArrowLeft stylesClass="pagination__icon" />}
      nextLabel={<IconPaginationArrowRight stylesClass="pagination__icon" />}
      breakLabel={'....'}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={4}
      onPageChange={(selectedPage) => handlePageChange(selectedPage)}
      containerClassName={'pagination'}
      pageClassName={'pagination__page'}
      pageLinkClassName={'pagination__button'}
      breakClassName={'pagination__break'}
      activeClassName={'pagination__page pagination__page_active'}
      previousClassName={'pagination__arrow'}
      nextClassName={'pagination__arrow'}
    />
  );
};

export default Pagination;
