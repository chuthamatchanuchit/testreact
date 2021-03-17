import React from 'react';
import Showuser from '../component/showuser';
import Photolist from '../component/photolist';
const showuser=(props)=>{
    return(
        <div>
            <Showuser id={props.match.params.id}/>
            <Photolist id={props.match.params.id}/>

        </div>
    )
}
export default showuser;
