import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed

const TableFooter = ({
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
  totalPages,
  totalCount
}) => {
  

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle page size change
  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page when page size changes
  };

  // Render pagination items
  const renderPagination = () => {
    const pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? 'active footer-a' : ''}`}
        >
          <div className="page-link " href="#" onClick={() => handlePageChange(i)}>
            {i}
          </div>
        </li>
      );
    }
    return pageItems;
  };

  return (
    <div className="footer-wrapper">
      <div style={{ display: 'flex', gap: '10px' }}>
        <p>Show</p>
        <select
          className="custom-select"
          style={{ height: '23px' }}
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <p>entries</p>
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li
            className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              tabIndex="-1"
            >
              Previous
            </a>
          </li>
          {renderPagination()}
          <li
            className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TableFooter;
