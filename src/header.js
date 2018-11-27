import React,{Component} from 'react';
import Logo from './assets/logo.png';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    

render(){
    return(
<div class="header">
        
        <div >
            <div class="img-container">
                <img class="img-responsive" src={Logo}/>
            </div>
        </div
        >
        <div >
            <h1>Best Casinos</h1>
            
        </div>

        <div>
            <h1>Slots</h1>
        </div>

         <div>
            <h1>Roulette</h1>
         </div>

         <div>
             <h1>Sport</h1>
         </div>
         <div class="row">
            <div class="col-1-2"></div>
            <div class="col-1-2">
                <div class="bar"></div>
            </div>
         </div>

    </div>
    );
    }
}