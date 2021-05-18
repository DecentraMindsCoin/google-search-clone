function SearchResults({ results}) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl[%14] lg:pl-52">
            <p className="text-gray-600 text-md ml-10 mb-5 mt-5">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime}seconds) </p>
       {results.items?.map((result) => ({}))}
        </div>
    )
}

export default SearchResults
