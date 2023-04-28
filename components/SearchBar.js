import React, { useState } from "react";
import styles from "/styles/SearchBar.module.css"
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ search }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        search(query);
    };

    return (
        <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Order ID..."
                className={styles.search}
            />
            <button type="submit"><SearchIcon style={{ fontSize: 40 }}/></button>
        </form>
        </div>
    );
};

export default SearchBar;