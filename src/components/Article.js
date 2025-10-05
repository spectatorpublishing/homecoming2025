//box width is 368 px, 308 px height 10 px curve radius for corner
//the wdith of the whole container is 1204 px
//height of the grey part is 192.29px
import React from "react";
import "./Articles.css";
const Article = ({ title, author, linkTo }) => {
  const handleClick = () => {
    window.open(linkTo, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="article-background"
      onClick={handleClick}
      style={{ cursor: linkTo ? "pointer" : "default" }}
    >
      <div className="article-image"></div>
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-author">By {author}</p>
      </div>
    </div>
  );
};

export default Article;
