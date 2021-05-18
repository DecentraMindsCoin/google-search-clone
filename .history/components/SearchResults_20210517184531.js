function SearchResults({ results }) {
    return (
        <div className="mx-auto w-full pl-3 pr-3 sm:pl[5%] sm:pl[14%] lg:pl-52">
            <p className="text-gray-600 text-sm ml-3 mb-5 mt-3">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds ) </p>
        {results.items?.map((result) => )}
        </div>
    )
}

export default SearchResults
