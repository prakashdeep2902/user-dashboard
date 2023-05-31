import React from 'react';
import './Pagination.css'
import { AiFillCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button onClick={handlePrevPage}>
                <AiFillCaretLeft />
            </button>
            <div className="page-info">
               {currentPage} / {totalPages}
            </div>
            <button onClick={handleNextPage}>
                <AiOutlineCaretRight />
            </button>
        </div>
    );
};

export default Pagination;
