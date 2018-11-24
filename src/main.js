import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import $ from 'jquery';
import brands from './brands.js';
import {incoming} from './incoming.js';
import Offer from './offer.js';
import Scroll from './scroll.js';
import Reviews from './review.js';
import { runInThisContext } from 'vm';




class Head extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainOffer: 0, icid: 54, scrollLeft: 200}
        this.changeMainOffer = this.changeMainOffer.bind(this);
        this.handleSrcollRight = this.handleSrcollRight.bind(this);
    }

    changeMainOffer(id){
        this.setState({mainOffer: id})
    }

    renderMainOffer(j){
        return <Offer offervalue ={j}  icid={this.state.icid}/>
    }

    componentWillMount() {
        incoming.call(this);
    }

    handleSrcollRight(){
        let e= document.querySelector('.horizontal-scroll');
        let item= document.querySelector('.horizontal-scroll .item');
        let scrollX= item.style.width;
        this.setState({scrollLeft:scrollX +20})
        e.scrollLeft = this.state.scrollLeft;    
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
                          <button className="button-left" onClick={this.handleSrcollRight   }></button>
                      </div>
                        <div className="horizontal-scroll" ref="scroller">
                            <Scroll function={this.changeMainOffer}/>
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
