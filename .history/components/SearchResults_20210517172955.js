function SearchResults({ results}) {
    return (
        <div>
            <p>About {results.searchInformation?.formattedTotalResults} results ({results,searchInformation?.formatted}seconds) </p>
        </div>
    )
}

export default SearchResults
