import React, { useState } from 'react';

function SearchInput() {
    const [query, setQuery] = useState('');

    const updateQuery = event => {
        setQuery(event.target.value);
    };

    const onSearch = () => {
        window.open(`https://google.com/search?q=${query}`, '_blank');
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div className="form">
            <input value={query} onChange={updateQuery} onKeyPress={handleKeyPress} />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}

export default SearchInput;
