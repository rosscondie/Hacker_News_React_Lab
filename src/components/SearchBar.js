const SearchBar = ({ handleSearchText }) => {
    return (<input className="center-search" onChange={handleSearchText} type="text" placeholder="Search By Title" />);
}

export default SearchBar;