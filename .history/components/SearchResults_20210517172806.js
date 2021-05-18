function SearchResults({ results}) {
    return (
        <div>
            <p>About {results.searchInformation?.formattedTotal}</p>
        </div>
    )
}

export default SearchResults
