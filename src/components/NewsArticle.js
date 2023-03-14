import Highlighter from "react-highlight-words";
const NewsArticle = ({ article, searchText }) => {
    return (
        <div className="news-article">
            <details>
                <summary>
                    <h2>
                        <Highlighter
                            highlightClassName="highlight-search"
                            searchWords={searchText}
                            autoEscape={true}
                            textToHighlight={article.title} />
                    </h2>
                    <aside>
                        <img src="https://thumbs.dreamstime.com/b/newspaper-line-icon-vector-newsletter-press-outline-sign-news-reporters-story-articles-publishing-linear-symbol-newspaper-line-141683184.jpg" alt="" />
                    </aside>
                </summary>

                <section>
                    <p>{article.by}</p>
                    <p>{article.type}</p>
                    <a href={article.url}>Link to Article</a>
                </section>
            </details>
        </div>
    );
}

export default NewsArticle;