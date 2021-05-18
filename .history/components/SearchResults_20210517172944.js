function SearchResults({ results}) {
    return (
        <div>
            <p>About {results.searchInformation?.formattedTotalResults} results ({results,searc}seconds) </p>
        </div>
    )
}

export default SearchResults
