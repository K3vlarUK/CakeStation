import React, { Component } from 'react';

class CakeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Cakes</h1>
                <a href="/">Home</a>
                <a href="/cakeList">My Cakes</a>
            </div>
         );
    }
}
 
export default CakeContainer;