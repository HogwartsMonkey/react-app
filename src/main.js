import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import icid from './incoming.js';
import './styles.css';
import $ from 'jquery';


const slotsHeaven = { 
    image: require('./assets/slots-heaven.png'),
    offer: 'Get 100% Up to £100 Get Also 200 Free Spins'
};
console.log(slotsHeaven.image);

function Head(props){
        return (
        <div className="img-container">
           <img className="img-responsive" src={props.image}/>
           <p>{props.offer}</p> 
        </div>
        );
}




ReactDOM.render(<Head offer={slotsHeaven.offer} image={slotsHeaven.image}/>,document.getElementById('root'));