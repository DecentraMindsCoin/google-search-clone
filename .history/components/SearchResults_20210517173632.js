function SearchResults({ results}) {
    return (
        <div className="">
            <p className="text-gray-600 text-md mb-5 mt-5">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime}seconds) </p>
        </div>
    )
}

export default SearchResults
