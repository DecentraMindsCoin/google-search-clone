function SearchResults({ results}) {
    return (
        <div>
            <p>About {results.searchInformation?.formatted}</p>
        </div>
    )
}

export default SearchResults
