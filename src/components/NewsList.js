import NewsArticle from "./NewsArticle";


const NewsList = ({ articles, searchText }) => {
    const articleNodes = articles.map((article) => (
        <NewsArticle key={article.id} article={article} searchText={[searchText]} />
    ))
    return (

        <div className="newsList">
            <h2>NewsList</h2>
            {articleNodes}
        </div>);
}

export default NewsList;