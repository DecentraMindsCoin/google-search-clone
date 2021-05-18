function SearchResults({ results}) {
    return (
        <div>
            <p className="">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime}seconds) </p>
        </div>
    )
}

export default SearchResults
