import React from "react";
import "./Pagination.css";

function Pagination({ totalPages, currentPage, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      let left = currentPage - 2;
      let right = currentPage + 2;

      if (left <= 2) {
        left = 2;
        right = 5;
      }
      if (right >= totalPages - 1) {
        right = totalPages - 1;
        left = totalPages - 4;
      }

      if (left > 2) pages.push("...");
      for (let i = left; i <= right; i++) {
        if (i > 1 && i < totalPages) pages.push(i);
      }
      if (right < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav className="pagination-container" aria-label="Paginacja">
      <button
        className="pagination__arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Poprzednia strona"
      >
        &lt;
      </button>
      {getPages().map((page, idx) =>
        page === "..." ? (
          <span key={`dots-${idx}`} className="pagination__dots">…</span>
        ) : (
          <button
            key={page}
            className={`pagination__btn${currentPage === page ? " active" : ""}`}
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}
      <button
        className="pagination__arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Następna strona"
      >
        &gt;
      </button>
    </nav>
  );
}
export default Pagination;
