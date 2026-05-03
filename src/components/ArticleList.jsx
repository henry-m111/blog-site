import Article from "./Article";

function ArticleList(props) {
  return (
    <section>
      <h2>Articles</h2>

      {props.articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </section>
  );
}

export default ArticleList;