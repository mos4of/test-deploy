import React from "react";
import "../components/style.css";

const Pages = ({ photos, loading }) => {
  return (
    <ul className="pagesList">
      {photos.map((photo, i) => {
        return (
          <li className="pagesListItem">
            {photo.id}.<span></span>
            <li></li>
            {photo.title}
            <img src={photo.url}></img>
          </li>
        );
      })}
    </ul>
  );
};

export default Pages;
