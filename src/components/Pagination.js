import React from "react";
import "../components/style.css";
const Pagination = ({ countElement, totalCountElement, paginationPoint }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalCountElement / countElement); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="paginationBox">
      <ul className="paginationList">
        {pageNumber.map((number) => {
          return (
            <li className="paginationListItem" key={number}>
              <a href="#" onClick={() => paginationPoint(number)}>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;