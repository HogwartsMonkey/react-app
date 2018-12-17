import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {incoming} from './incoming.js';
import Offer from './offer.js';
import Scroll from './scroll.js';
import Reviews from './review.js';
import scrollLeft from './scroll-left.js';
import scrollRight from './scroll-right.js';
import Header from './header.js';
import { isAbsolute } from 'path';
import brands from './brands.js';


let barStyles = {
    transform: 'translateX(0)',
    position:'absolute',
    left:0,
    display:'inline-block',
    width:'25%',
    padding:0,
    height:'100%',
    backgroundColor:'grey',
    transition: 'transform 0.1s linear'
}

let barContainer = {
    width: '90%',
    height: 15,
    border:'2px solid rgb(197, 208, 216)',
    borderRadius: '2px 2px',
    position:'absolute',
    top:'50%',
    transform: 'translateY(-50%)'
}


class Head extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mainOffer: 0,
             icid: 54, 
             scrollPosition: 0, 
             menuSize: 0, 
             clicksCounter :0, 
             barStyle : this.props.styles,
             barContainer: this.props.barContainer,
             Brands: this.props.brands
        }
          
        this.changeMainOffer = this.changeMainOffer.bind(this);
        this.scrollLeft = scrollLeft.bind(this);
        this.scrollRight = scrollRight.bind(this);
        this.moveBar = this.moveBar.bind(this);
       
    }

    changeMainOffer(id){
        this.setState({mainOffer: id})
    }

    renderMainOffer(j){
        return <Offer offervalue ={j}  icid={this.state.icid} Brands={this.state.brands}/>
    }

    componentDidMount() {
        incoming.call(this);
    }

    moveBar(to){
        let x = to+'%';
        let styleCopy = Object.assign({}, this.state.barStyle);
        styleCopy.transform = 'translateX('+x+')';
        this.setState({barStyle :styleCopy});
    }

    

    
   
        render(){
        return ( 
                <React.Fragment>
                   <Header function={this.state.offervalue} changeBar={this.moveBar} barMenuStyle={this.state.barStyle}/>
                    {this.renderMainOffer(this.state.mainOffer)}
                    <div className="row">
                        <p>Discover More Online Casinos</p>
                    </div> 
                    <div className="scroll-menu-warpper">  
                         <div className="paddle-left">
                                <button className="button-left" onClick={this.scrollRight}>&#x3c;</button>
                        </div>
                        <div className="horizontal-scroll">
                        <Scroll function={this.changeMainOffer} changeBarWidth={this.changeBarWidth}/>
                         </div>
                    <div className="paddle-right">
                        <button className="button-right"onClick= {this.scrollLeft} >&#x3e;</button>
                    </div>
                     </div>

                    <div id="details">
                    <Reviews offervalue={this.state.mainOffer} barContainer={this.state.barContainer}/>
                    </div>
                        
                </React.Fragment>
        );
     }
}


ReactDOM.render(<Head styles={barStyles} barContainer={barContainer} brands={brands}/>,document.getElementById('main-offer'));
