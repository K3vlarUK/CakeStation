import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Cake = ({cake}) => {

    if(!cake){
        return "Loading..."
    }

    const url = '/cakes/' + cake.id;

    return ( 
        <Fragment>
            <Link to={url} className="name"><h4>{cake.name}</h4></Link>
            <p>{cake.comment}</p>
            <p>{cake.url}</p>
            <p>{cake.yumfactor}</p>
        </Fragment>
     );
}
 
export default Cake;