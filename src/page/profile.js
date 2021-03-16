import React from 'react';
import Profile from '../component/profile';
import Photolist from '../component/photolist'
const profile=(props)=>{
    return(
        <div>
            <Profile id={props.match.params.id}/>
            <Photolist id={props.match.params.id}/>

        </div>
    )
}
export default profile;
