 import React from 'react';
 import brands from './brands.js';
 
 export default class Scroll extends React.Component{
    constructor(props){
        super(props);
    }
    renderItem(i){
       return  <Item value ={brands[i].image} function={this.props.function} arrayLocation={i}/>
    }

    render(){
    return (
       <React.Fragment>
            {this.renderItem(0)}
            {this.renderItem(1)}
            {this.renderItem(2)}
            {this.renderItem(3)}
            {this.renderItem(4)}
            {this.renderItem(5)}

        </React.Fragment>
    );
    }
}


  class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.value}
    }
    
    render(){
        return(
            <div className="item">
                <div className="img-container"  onClick={()=>this.props.function(this.props.arrayLocation)}>
                    <img className="img-responsive" src={this.state.value}/>
                </div>
            </div>
        );
    }
}

