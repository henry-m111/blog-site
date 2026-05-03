import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blog from "./blog";

function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About about={blog.about} image={blog.image} />
      <ArticleList articles={blog.articles} />
    </div>
  );
}

export default App;