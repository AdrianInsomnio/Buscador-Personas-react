import { useState } from "react";

const SearchBox = ( {onSearch,onClose} ) => {
    const [searchText, setSearchText] = useState("");
    const handleClsoseClick =()=>{
        onClose();
        setSearchText("");
        
    }
    return (
        <div className="search-box">
            <h2>Buscador de personal</h2>
                <div className ="search-box-butons">
                    <label >
                        <input 
                            value={searchText} 
                            className="search-box-input"
                            onChange={({ target : { value }})=> setSearchText(value) }                              
                        />
                    </label>   
                    <button className="search-box-button" 
                        onClick={ ()=> onSearch(searchText)}>
                        Buscar
                    </button> 
                    <button className="search-box-button" 
                        onClick={handleClsoseClick}>
                        Cerrar
                    </button>
            </div>
        </div>
    )
}

export default SearchBox
