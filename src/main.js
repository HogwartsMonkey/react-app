import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import $ from 'jquery';
import brands from './brands.js';
import {incoming} from './incoming.js';
import Offer from './offer.js';
import Scroll from './scroll.js';
import Reviews from './review.js';




class Head extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainOffer: 0, icid: 54}
        this.changeMainOffer = this.changeMainOffer.bind(this);
    }

    changeMainOffer(arrayLocation){
        this.setState({mainOffer: arrayLocation})
    }

    renderMainOffer(j){
        return <Offer offervalue ={j}  icid={this.state.icid}/>
    }

    componentWillMount() {
        incoming.call(this);
    }
    

        render(){
        return ( 
                <React.Fragment>
                    {this.renderMainOffer(this.state.mainOffer)}
                    <div className="row">
                        <p>Discover More Online Casinos</p>
                    </div> 
                    <div className="scroll-menu-warpper">
                        <div className="paddle-left">
                            <button className="button-left"></button>
                        </div>
                        <div className="horizontal-scroll">
                            <Scroll function={this.changeMainOffer}/>
                        </div>
                        <div className="paddle-right">
                            <button className="button-right"></button>
                        </div>
                    </div>
                    <div id="details">
                    <Reviews offervalue={this.state.mainOffer}/>
                    </div>
                        
                </React.Fragment>
        );
     }
}



ReactDOM.render(<Head/>,document.getElementById('main-offer'));
