import axios from 'axios';
import React, { useState } from 'react';
import Post from '../component/post';

const Search=()=>{
    const Access ="IwuZoAdAC50Pr_6qx1kzIFdK0NENSBE3zvZni0EhtOA";
    const [keySearch, setKeySearch]=useState("");
    const [userphotos, setUserphotos]=useState([]);
    
    const handleInput=(Event)=>{
        setKeySearch(Event.target.value);
        console.log(keySearch);
    }
    const handleSubmit=()=>{
        const unsplash="http://api.unsplash.com/search/photos?page=1&query="+keySearch+"&client_id="+Access;
    axios.get(unsplash).then((response)=>{
        console.log(response);
        setUserphotos(response.data.results)
    })
    }

    return (
        <div>
            <br/>
            <input class="search" type="text" onChange={handleInput}/> 
            <button onClick={handleSubmit} >search</button>
            <div className="gallery">
            {userphotos.map(items=>(
                <Post list={items}/>
                
            ))}
        </div>
        </div>
    )
}
export default Search;