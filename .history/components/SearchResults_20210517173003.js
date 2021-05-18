function SearchResults({ results}) {
    return (
        <div>
            <p>About {results.searchInformation?.formattedTotalResults} results ({results,searchInformation?.formattedSeacrhTime}seconds) </p>
        </div>
    )
}

export default SearchResults
