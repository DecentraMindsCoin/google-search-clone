function SearchResults({ results }) {
    return (
        <div className="text-gray600 text-md mb-5 mt-3">
            <p>About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds ) </p>
        </div>
    )
}

export default SearchResults
