import React from 'react';
import brands from './brands.js';

export default class mainImage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        <div className="img-container">
            <img className={this.state.offervalue == this.props.offervalue ? "img-responsive visible": "img-responsive hidden"} src={brands[this.props.offervalue].image}/>
        </div>
    }
}