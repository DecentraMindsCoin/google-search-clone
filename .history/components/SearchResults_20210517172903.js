function SearchResults({ results}) {
    return (
        <div>
            <p>About {results.searchInformation?.formattedTotalResults} results ({}seconds) </p>
        </div>
    )
}

export default SearchResults
