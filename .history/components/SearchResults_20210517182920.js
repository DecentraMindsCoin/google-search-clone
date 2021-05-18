function SearchResults() {
    return (
        <div>
            <p>About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation} seconds ) </p>
        </div>
    )
}

export default SearchResults
