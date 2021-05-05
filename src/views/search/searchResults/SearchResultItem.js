import React from 'react'

const SearchResultItem = ({name , phone , email}) => {
    return (
        <div>
            <div style ={
                {background :"#e8e7e7",
                padding:10,
                marginTop: 10,
                width:"97%",
                text: "left",
                }} >
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
        </div>
    )
}

export default SearchResultItem
