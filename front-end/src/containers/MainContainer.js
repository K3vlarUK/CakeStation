import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Request from "../helpers/request";
import CakeContainer from './CakeContainer';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cakes: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/cakes')
        .then(response => response.json())
        .then((data) => {
            this.setState({
                cakes: data
            })
        })
    }

    render() { 
        return ( 
            <Fragment>
                <div className="main-container">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={CakeContainer}/>
                            <Route path="/cakeList" />
                        </Switch>
                    </Router>
                    <div className="test-layout">
                        {this.state.cakes.map((cake, index) => {
                            return (
                        <h2>{ cake.name }</h2>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default MainContainer;