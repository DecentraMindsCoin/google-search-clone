function SearchResults({ results }) {
    return (
        <div className="text-gray-600 text-md mb-5 ">
            <p>About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds ) </p>
        </div>
    )
}

export default SearchResults
