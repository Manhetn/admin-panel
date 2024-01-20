import React from 'react';
import ReactPaginate from 'react-paginate';

import { IconPaginationArrowLeft, IconPaginationArrowRight } from '@icons';
import './styles.scss';

interface IPaginationProps {
  totalPages: number;
  handlePageChange: () => void;
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
      onPageChange={handlePageChange}
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
