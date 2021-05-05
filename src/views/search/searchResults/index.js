import React from 'react'
import SearchResultItem from './SearchResultItem';

const SearchResults = ({results}) => {
    return (
        <div style={{
            width:"100%",
            padding:"0rem 2 rem 0 rem 2 rem ",
            textAlign:'left'
        }}>
            {results?.map((value)=>{
               return(
                   <SearchResultItem 
                        key={value.id} 
                        {...value}
                   />
               ); 
            })}
        </div>
    )
}

export default SearchResults
