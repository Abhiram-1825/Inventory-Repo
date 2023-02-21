import React from "react";
import styles from './Pagination.module.css';

const Pagination = (props) => {
    const numPages = props.noOfPages;
    const currentPage = +props.currPage;
    const maxPageNumbers = 10;
    const pageNumbers = [...Array(props.noOfPages + 1).keys()].slice(1);
    const handlePageChange = (event) => {
        const pageNumber = Number(event.target.textContent);
        props.setCurrPage(pageNumber);
    };
    const getDisplayedPageNumbers = () => {
        let start = 0;
        let end = 0;
        if (currentPage <= maxPageNumbers - 2) {
            start = 0;
            end = maxPageNumbers - 1;
        } else if (currentPage >= numPages - 1) {
            start = numPages - maxPageNumbers;
            end = numPages - 1;
        } else {
            start = currentPage - Math.floor(maxPageNumbers / 2) - 1;
            end = currentPage + Math.floor(maxPageNumbers / 2);
        }

        // Add ellipsis if there are more pages
        if (start > 0) {
            pageNumbers.splice(0, 0, "...");
        }
        if (end < numPages - 1) {
            pageNumbers.push("...");
        }

        // Return the page numbers to display
        return pageNumbers.slice(start, end + 1);
    }

    const displayedPageNumbers = getDisplayedPageNumbers();

    return (
        <nav className={styles.paginate}>
            <ul className="pagination">
                <li
                    className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                    }`}
                >
                    <button
                        className="page-link"
                        onClick={() => {
                            props.setCurrPage(currentPage - 1);
                        }}
                    >
                        Previous
                    </button>
                </li>
                {displayedPageNumbers.map((pageNumber, index) => (
                    <li
                        key={pageNumber + index}
                        className={`page-item ${
                            pageNumber === currentPage ? "active" : ""
                        }`}
                    >
                        <button
                            className="page-link"
                            onClick={handlePageChange}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}
                <li
                    className={`page-item ${
                        currentPage === numPages ? "disabled" : ""
                    }`}
                >
                    <button
                        className="page-link"
                        onClick={() => {
                            props.setCurrPage(currentPage + 1);
                        }}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
