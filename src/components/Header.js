import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/HambergerMenuSlice";
import { searchApi, YOUTUBE_SEARCH_API, YOUTUBE_SUGGESTION_API } from "../api/constant";
import { cacheResults } from "../utils/searchSlice";
import { addSearchResult } from "../utils/searchResultsSlice";
import { Link, NavLink, redirect, useNavigate, useNavigation} from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuesry] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //const navigation = useNavigation()
  //console.log("navigation",navigation)
  const cacheSearch = useSelector(store=>store.search)
  
  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1])
    //console.log("apidata", json[1]);
    dispatch(cacheResults({
[searchQuery]:json[1]
    }))
  };
  useEffect(() => {
    const timeer = setTimeout(() => {
      if(cacheSearch[searchQuery]){
        setSearchQuesry(cacheSearch[searchQuery])
      }else{
        getSuggestion()
      }
      }, 200);
    return () => {
      clearTimeout(timeer);
    };
  }, [searchQuery]);

  const handleToggleMemu = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = async (s)=>{
    console.log("pallavi")
    setSearchQuesry(s)
    const data = await fetch(searchApi(searchQuery))
    const json = await data.json()
    console.log("search",json.items)
    dispatch(addSearchResult(
      json.items
    ))
    navigate("/results")
    setShowSuggestion(false)
  }
  return (
    <div className="grid grid-flow-col shadow-lg px-5 py-3 m-2">
      <div
        className="flex col-span-1 cursor-pointer"
        onClick={() => handleToggleMemu()}
      >
        <img
          className="h-8"
          alt="img"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <img
          className="mx-2 h-7"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
        />
      </div>
      <div className="col-span-10 px-10 text-center relative">
      <div>
        <input
          className="w-1/2 border-gray-400 rounded-l-full border-2 h-[31px] p-2"
          value={searchQuery}
          onChange={(e) => setSearchQuesry(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          //onBlur={()=>setShowSuggestion(false)}
        />
        <button className="border-2 border-gray-400 rounded-r-full pb-[7px] pt-[4px] px-5 bg-gray-100">
          <img
            className="h-[17px]"
            alt="search-logo"
            src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
          />
        </button>
        </div>
        {showSuggestion && suggestion && <div className="fixed bg-white shadow-2xl col-span-10 w-[520px] py-2 px-5 ml-[230px] rounded-xl border border-gray-200 absolute">
          <ul className="text-left">
            {
              suggestion.map((s)=><li key={s} className="hover:bg-gray-100 py-1 flex" onClick={()=>handleSearch(s)}>
                {/* <Link to={"/results?"+s} onClick={()=>handleSearch(s)}> */}
                <img
              className="h-[13px] mt-[6px] pr-[10px]"
              alt="search-logo"
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
            />{s}{/* </Link> */}</li>)
            }
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="userimg"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
    </div>
  );
};

export default Header;
