//container that holds a section of articles
import "./Articles.css";
import Article from "./Article";

const ArticleContainer = ({ sectionTitle, articles, start = 0, end }) => {
  const displayedArticles = articles.slice(start, end); //slice the articles array to get the correct article indexes to display for a certain section
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
            youtubeUrl={a.youtubeUrl}
          />
        ))}
        {displayedArticles.length === 2 && (<div></div>)}
      </div>
    </div>
  );
};

export default ArticleContainer;
