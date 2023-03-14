import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

const NewsContainer = () => {
    const [articles, setArticles] = useState([]);
    const [searchText, setSearchText] = useState("")


    useEffect(() => {
        const getData = async () => {
            const ids = await top20Ids();
            getArticles(ids);
        }
        getData();
    }, []);

    const top20Ids = async () => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const data = await response.json();
        return data.splice(0, 20);
    };

    const getArticles = async (ids) => {
        const articlePromises = ids.map(async (id) => {
            const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            return await response.json();
        })

        const articleList = await Promise.all(articlePromises);
        setArticles(articleList);
    }

    const handleSearchText = (event) => {
        setSearchText(event.target.value)
    }

    if (articles.length) {

        const filteredByTitle = articles.filter((article) => {
            return article.title.toLowerCase().includes(searchText.toLowerCase())
        });

        return (
            <div>
                <SearchBar handleSearchText={handleSearchText} />
                <NewsList articles={filteredByTitle}
                    searchText={searchText} />
            </div>
        );
    };
};

export default NewsContainer;