import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import $ from 'jquery';
import brands from './brands.js';
import {incoming} from './incoming.js';
import Offer from './offer.js';
import Scroll from './scroll.js';
import Reviews from './review.js';
import animateScrollTo from 'animated-scroll-to';



class Head extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainOffer: 0, icid: 54, scrollPosition: 0, menuSize: 0 ,prevPosition: 0}
        this.changeMainOffer = this.changeMainOffer.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
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

    scrollLeft(){
        let scrollMenu = document.querySelector('.horizontal-scroll');
        let menuWidth =document.querySelector('.horizontal-scroll').getBoundingClientRect().width;
        let menuLeft = document.querySelector('.horizontal-scroll').getBoundingClientRect().left;
        let itemWidth= document.querySelector('.item').getBoundingClientRect().width;
        let currentPosition = this.state.prevPosition;
        const options = {
            speed: 500,
            minDuration: 250,
            maxDuration: 1500,
            element: document.querySelector('.horizontal-scroll'),
            offset: 0,
            cancelOnUserAction: true,
            passive: true,
            horizontal: true,
            onComplete: function() {}
          };
        if (this.state.menuSize == 0){
            this.setState({menuSize : menuWidth},function(){
                this.setState({scrollPosition: this.state.scrollPosition + itemWidth},function(){
                    let desieredPosition = this.state.scrollPosition;
                    animateScrollTo(desieredPosition,options) })
        })
        
    }
        else {
            this.setState({scrollPosition: this.state.scrollPosition + itemWidth},function(){
                let desieredPosition = this.state.scrollPosition;
                animateScrollTo(desieredPosition,options) })
    }

        
    
              

            this.setState({prevPosition: this.state.scrollPosition});         
            
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
                                <button className="button-left" onClick={this.scrollLeft}></button>
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
