function SearchResults({ results}) {
    return (
        <div>
            <p>About {results.searchInformation?.formattedTotalResults} </p>
        </div>
    )
}

export default SearchResults
