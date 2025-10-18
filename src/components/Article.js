//actual block that displays an article's preview, title, and author. Can be clicked to redirect to a full article.

import "./Articles.css";
const Article = ({ title, author, linkTo, image, youtubeUrl = null }) => {
  const handleClick = () => {
    window.open(linkTo, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="article-background" // can click anywhere on the article block to be redirected to the corresponding article
      onClick={handleClick}
      style={{ cursor: linkTo ? "pointer" : "default" }}
    >
      {youtubeUrl == null ? (
      <div
        className="article-image"
        style={{ backgroundImage: image ? `url(${image})` : undefined }}
      ></div>
      ) : (
      <div className="article-image">
          <iframe
            src={youtubeUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
      </div>
      )}
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-author">By {author}</p>
      </div>
    </div>
  );
};

export default Article;
