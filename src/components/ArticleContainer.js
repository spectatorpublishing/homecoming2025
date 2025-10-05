import React from "react";
import "./Articles.css";
import Article from "./Article";

const ArticleContainer = ({ sectionTitle, articles, start = 0, end }) => {
  const displayedArticles = articles.slice(start, end);
  return (
    <div className="article-container">
      <h2 className="section-title">{sectionTitle}</h2>
      <div className="articles-grid">
        {displayedArticles.map((a, idx) => (
          <Article
            key={start + idx}
            title={a.title}
            author={a.author}
            linkTo={a.articleLink}
            image={a.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleContainer;
