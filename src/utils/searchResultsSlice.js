import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
    name:"search results",
    initialState:{
        searchResults:[]
    },
    reducers:{
        addSearchResult:(state,action)=>{
            state.searchResults = action.payload
        }
    }
})
export const {addSearchResult}=searchResultsSlice.actions
export default searchResultsSlice.reducer;