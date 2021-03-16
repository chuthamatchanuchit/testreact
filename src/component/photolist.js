import axios from 'axios';
import React, { useState,useEffect } from 'react';


const Photolist=({id})=>{
    const Access ="IwuZoAdAC50Pr_6qx1kzIFdK0NENSBE3zvZni0EhtOA";
    const [Photos, setPhotos]=useState([]);
    
    
    const unsplash="http://api.unsplash.com/users/"+id+"/photos?page=1&client_id="+Access;
    useEffect(()=>{
        axios.get(unsplash).then((response)=>{
            setPhotos(response.data);
        })
    },[id])
    return (
        <div class="profile-bio">
            {Photos.map(item=>(<>
                <img style={{width:"200px"}} src={item.urls.small}/>
                
                </>
            ))}
        
        </div>
    )
}
export default Photolist;