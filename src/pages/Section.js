//section page that has multiple sections for articles

import "./Section.css";
import ArticleContainer from "../components/ArticleContainer";
import acArticles from "../data/acArticles";
import crosswordsArticles from "../data/crosswordsArticles";
import spectrumArticles from "../data/spectrumArticles";
import sportsArticles from "../data/sportsArticles";
import uniArticles from "../data/uniArticles";
import cityArticles from "../data/cityArticles";
import videoArticles from "../data/videoArticles";

const Section = () => {
  return (
    <div className="section-page">
      <section id="section1">
        <ArticleContainer
          sectionTitle="University"
          articles={uniArticles}
          start={0}
          end={3}
        />
      </section>

      <section id="section2">
        <ArticleContainer
          sectionTitle="Sports"
          articles={sportsArticles}
          start={0}
          end={4}
        />
      </section>

      <section id="section3">
        <ArticleContainer
          sectionTitle="A & C"
          //articles={ac2Articles}
          articles={acArticles}
          start={0}
          end={4}
        />
      </section>

      <section id="section4">
        <ArticleContainer
          sectionTitle="Spectrum"
          articles={spectrumArticles}
          start={0}
          end={4}
        />
      </section>

      <section id="section5">
        <ArticleContainer
          sectionTitle="Crosswords"
          articles={crosswordsArticles}
          start={0}
          end={4}
        />
      </section>

      <section id="section6">
        <ArticleContainer
          sectionTitle="City"
          articles={cityArticles}
          start={0}
          end={4}
        />
      </section>

      <section id="section7">
        <ArticleContainer
          sectionTitle="Video"
          articles={videoArticles}
          start={0}
          end={4}
        />
      </section>
    </div>
  );
};
export default Section;
