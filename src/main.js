import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Logo from './assets/logo.png';
import Outgoing from './outgoing.js';
import Incoming from './incoming.js';
import icid from './incoming.js';
import './styles.css';
import $ from 'jquery';
import slotsHeaven from './brands.js';


class mainOffer extends React.Component{
    render(){
        return (
        <div className="img-container">
           <img className="img-responsive" src="{slotsHeaven.image}" /> 
        </div>
        );
    }
}

ReactDOM.render(<mainOffer/>,document.getElementById('root'));