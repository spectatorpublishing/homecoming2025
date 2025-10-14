//section page that has multiple sections for articles

import "./Section.css";
import ArticleContainer from "../components/ArticleContainer";

const Section = () => {
  //placeholder article data - replace with actual data later
  const articlesMap = [
    {
      title: "Article Title However Long It May Be, I Wouldn't Know",
      author: "First Last",
      articleLink: "https://www.columbiaspectator.com/",
      image: "",
    },
    {
      title: "Article Title However Long It May Be, I Wouldn't Know",
      author: "First Last",
      articleLink: "https://www.columbiaspectator.com/",
      image: "",
    },
    {
      title: "Article Title However Long It May Be, I Wouldn't Know",
      author: "First Last",
      articleLink: "https://www.columbiaspectator.com/",
      image: "",
    },
    {
      title: "Article Title However Long It May Be, I Wouldn't Know",
      author: "First Last",
      articleLink: "https://www.columbiaspectator.com/",
      image: "",
    },
  ];
  return (
    <div className="section-page">
      <section id="section1">
        <ArticleContainer
          sectionTitle="SECTION"
          articles={articlesMap}
          start={0}
          end={3}
        />
      </section>

      <section id="section2">
        <ArticleContainer
          sectionTitle="SECTION"
          articles={articlesMap}
          start={1}
          end={4}
        />
      </section>

      <section id="section3">
        <ArticleContainer
          sectionTitle="SECTION"
          articles={articlesMap}
          start={0}
          end={4}
        />
      </section>

      <section id="section4">
        <ArticleContainer
          sectionTitle="SECTION"
          articles={articlesMap}
          start={0}
          end={4}
        />
      </section>
    </div>
  );
};
export default Section;
