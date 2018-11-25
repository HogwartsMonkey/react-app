 import React from 'react';
 import brands from './brands.js';
 
 export default class Scroll extends React.Component{
    constructor(props){
        super(props);
    }
    renderItem(i){
       return  <Item image={brands[i].image} changeMainOffer={this.props.function} id={i}/>
    }

    render(){
    return (

        <div className="horizontal-scroll">
            {this.renderItem(0)}
            {this.renderItem(1)}
            {this.renderItem(2)}
            {this.renderItem(3)}
            {this.renderItem(4)}
            {this.renderItem(5)}
            {this.renderItem(6)}
            {this.renderItem(7)}

        </div>
    );
    }
}


  class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {image: this.props.image}
    }
    
    render(){
        return(
            <div className="item">
                <div className="img-container scroll-item"  onClick={()=>this.props.changeMainOffer(this.props.id)}>
                    <img className="img-responsive" src={this.state.image}/>
                </div>
            </div>
        );
    }
}

