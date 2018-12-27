import React from 'react';
import Logo from './assets/logo.png';


export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            barStyle: this.props.barMenuStyle,
            brands:this.props.brands
        };
        
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

        <div onClick={()=>{this.props.changeBar(0,this.state.brands,0)}}>
            <h1>Best Casinos </h1>
            
        </div>

        <div onClick={()=>{this.props.changeBar(100,this.state.brands,1)}}>
            <h1>Slots</h1>
        </div>

         <div onClick={()=>{this.props.changeBar(200,this.state.brands,2)}} >
            <h1>Roulette</h1>
         </div>

         <div onClick={()=>{this.props.changeBar(300,this.state.brands,0)}}>
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