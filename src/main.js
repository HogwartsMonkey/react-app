import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Logo from './assets/logo.png';
import Outgoing from './outgoing.js';
import Incoming from './incoming.js';
import icid from './incoming.js';
import './styles.css';
import $ from 'jquery';
import slotsHeavenImage from './assets/slots-heaven.png';

const slotsHeaven = { 
    image: {slotsHeavenImage},
    offer: 'Get 100% Up to £100 Get Also 200 Free Spins'
};
console.log(slotsHeaven.image);
console.log(slotsHeavenImage);
function Head(props){
        return (
        <div className="img-container">
           <img className="img-responsive" src={props.image.slotsHeavenImage}/>
           <p>{props.offer}</p> 
        </div>
        );
}




ReactDOM.render(<Head offer={slotsHeaven.offer} image={slotsHeaven.image}/>,document.getElementById('root'));