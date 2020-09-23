import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateCakeContainer from "./CreateCakeContainer";
import MyCakesContainer from './MyCakesContainer';
import Request from '../helpers/request';
import CakeList from '../components/CakeList';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cakes: []
        }
    }

    componentDidMount() {
        const request = new Request();
        request.get('/cakes').then((data) => {
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
                            <Route exact path="/cakes" render={(props) => {
                                return <CakeList cakes={this.state.cakes} />
                            }}/>
                            <Route path="/cakes/mine" component={MyCakesContainer} />
                            <Route path="/cakes/new" component={CreateCakeContainer} />
                        </Switch>
                    </Router>
                </div>
            </Fragment>
         );
    }
}
 
export default MainContainer;