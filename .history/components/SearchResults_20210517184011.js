function SearchResults({ results }) {
    return (
        <div className="text-gray-600 text-sm ml-3 mb-5 mt-3">
            <p className="text-gray-600 text-sm ml-3 mb-5 mt-3">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds ) </p>
        </div>
    )
}

export default SearchResults
