import React from 'react';
import {render} from 'react-dom';
import SearchParams  from './SearchParams';
import { Router, Link } from "@reach/router";
import Details from './Details';
const App = () => {
    return (
        <React.StrictMode>
        <div>
            <header>
            <Link to = '/'>Adopt me!</Link>
            </header>
            
            <Router>
            <SearchParams path ="/"/>
            <Details path ="/details/:id"/>
            </Router>
        </div>
        </React.StrictMode>
        
    )
};

render(
    <App></App>,
    document.getElementById("root")

);