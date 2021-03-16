import axios from 'axios';
import React, { useState,useEffect } from 'react';


const Profile=({id})=>{
    const Access ="IwuZoAdAC50Pr_6qx1kzIFdK0NENSBE3zvZni0EhtOA";
    const [user, setUser]=useState([]);
    
    
    const unsplash="http://api.unsplash.com/search/users?page=1&query="+id+"&client_id="+Access;
    useEffect(()=>{
        axios.get(unsplash).then((response)=>{
            setUser(response.data.results);
        })
    },[id])
    return (
        <div>
            {user.map(item=>(<>
                <img src={item.profile_image.large}/>
                <h2>{item.first_name}</h2>
                <h4>posts&nbsp;:&nbsp;{item.total_photos}</h4>
                <h4>like&nbsp;:&nbsp;{item.total_likes}</h4>
                <h4>collections&nbsp;:&nbsp;{item.total_collections}</h4>
                </>
            ))}
        
        </div>
    )
}
export default Profile;