'use client';
import ReactPaginate from "react-paginate";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (selected: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={page - 1}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={({ selected }) =>
        onPageChange(selected + 1)
      }
      containerClassName="pagination"
      activeClassName="active"
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
    />
  );
}




