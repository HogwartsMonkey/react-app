import React from 'react';
import Logo from './assets/logo.png';


export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {previousPosition: 1, barStyle: this.props.barMenuStyle};
        
    }
   
    componentDidUpdate(prevProps) {
        if (prevProps.barMenuStyle !== this.props.barMenuStyle) {
          this.setState({barStyle: this.props.barMenuStyle})
        }
        else {
            return false;
        }
      }


render(){
    return(
<div className="header">
        
        <div >
            <div className="img-container">
                <img className="img-responsive" src={Logo}/>
            </div>
        </div>

        <div onClick={this.props.changeBar}>
            <h1>Best Casinos </h1>
            
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
                <div style={this.state.barStyle}></div>
            </div>
         </div>

    </div>
    );
    }
}