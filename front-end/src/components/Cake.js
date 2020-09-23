import React, {Fragment} from 'react';

const Cake = ({cake}) => {

    if(!cake){
        return "Loading..."
    }

    return ( 
        <Fragment>
            <h4>{cake.name}</h4>
            <p>{cake.comment}</p>
            <p>{cake.url}</p>
            <p>{cake.yumfactor}</p>
        </Fragment>
     );
}
 
export default Cake;