import React, { useEffect, useState } from   'react';
import SearchBox from './searchBox';

import './style.css';
import data from '../../data/users.json';
import SearchResults from './searchResults';



const Search = () => {
    const [isAtTop,setIsAtTop] = useState(false);
    const [ usersData, setUsersData ] =useState(data);
    const [ results, setResultsData ] =useState([]);
    const handleSearchClick =(searchText)=>{
        setIsAtTop(true);
        if (usersData?.length){
            const searchLow = searchText.toLowerCase();
            const filterData = usersData.filter((value)=>{
                return (
                    value.name.toLowerCase().includes(searchLow) ||
                    value.phone.toLowerCase().includes(searchLow) ||
                    value.email.toLowerCase().includes(searchLow)||
                    value.username.toLowerCase().includes(searchLow)
                    );
            });
            //console.log(filterData);
            setResultsData(filterData);
        }
    };
    const handleCloseClick =()=>{
        setIsAtTop(false);
        setResultsData([]);
    }

    useEffect(() => {
        setUsersData(data);
        }, [])
    //console.log(results);
    return (
        <div className={`search ${isAtTop ? "search--top ": "search--center"}`} >
            <SearchBox 
                onSearch={handleSearchClick} 
                onClose={handleCloseClick} 
            />       
            <SearchResults 
                results={results}                
            />
        </div>
    )
}

export default Search
