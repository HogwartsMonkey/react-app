import React from 'react';
import Logo from './assets/logo.png';



export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentPosition: 1};
        this.moveBar = this.moveBar.bind(this);
        this.elementRef = React.createRef();
    }

    moveBar(desieredPosition){
        let element = this.elementRef.current;
        let previousPosition = this.state.currentPosition;
        console.log({element});
           
    }

render(){
    return(
<div className="header">
        
        <div >
            <div className="img-container">
                <img className="img-responsive" src={Logo}/>
            </div>
        </div>

        <div onClick={this.moveBar(2)} ref={this.elementRef}>
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
         <div className="row">
            <div className="col-1-2"></div>
            <div className="col-1-2">
                <div className="bar"></div>
            </div>
         </div>

    </div>
    );
    }
}