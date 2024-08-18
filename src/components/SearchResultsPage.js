import React from "react";
import { useSelector } from "react-redux";
import SingleSearchResult from "./SingleSearchResult";

const SearchResultsPage = () => {
  const searchResult = useSelector(store=>store.searchResult.searchResults)
  console.log("searchResult",searchResult)
  return (
    <div>
      {
        searchResult.map((data)=><SingleSearchResult info={data}/>)
      }
        
     
    </div>
  );
};

export default SearchResultsPage;
