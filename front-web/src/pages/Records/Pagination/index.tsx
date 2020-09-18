import React from 'react';
import './styles.css'

type props = {
    totalPages?: number;
    goToPage: Function;
    activePage: number;


}
const Pagination = ({ totalPages = 0, goToPage, activePage }: props) => {
    const paginationItems = Array.from(Array(totalPages).keys());
    return (
        <div className="pagination-container">
            {paginationItems.map(item => (
                <button
                    key={item}
                    className={`pagination-item ${activePage === item ? 'active' : 'inactive'}`}
                    onClick={() => goToPage(item)}
                >
                    {item + 1}
                </button>
            ))
            }

        </div >
    );

}
export default Pagination;