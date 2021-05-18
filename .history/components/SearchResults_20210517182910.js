function SearchResults() {
    return (
        <div>
            <p>About {results.searchInformation?.formattedTotalResults} results ({results.search} seconds ) </p>
        </div>
    )
}

export default SearchResults
