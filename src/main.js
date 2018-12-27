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
    borderRadius: '5px',
    position:'absolute',
    top:'50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgb(197, 208, 216)'
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
             brands: this.props.brands
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
        return <Offer offervalue ={j}  icid={this.state.icid} brands={this.state.brands}/>
    }

    componentDidMount() {
        incoming.call(this);
    }

    moveBar(to,brands,i){
        
        let x = to+'%';
        let slots = brands.slice();
        let casinos = brands.slice();
        let roulette = brands.slice();
        roulette = [roulette[3],roulette[4],roulette[2],roulette[5],roulette[6],roulette[0],roulette[1],roulette[7]];
        slots = [slots[1],slots[0],slots[7],slots[5],slots[2],slots[3],slots[4],slots[6]];
        let allCategories = []
        allCategories.push(casinos);
        allCategories.push(slots);
        allCategories.push(roulette);
        let styleCopy = Object.assign({}, this.state.barStyle);
        styleCopy.transform = 'translateX('+x+')';
        this.setState({barStyle :styleCopy, brands: allCategories[i],mainOffer: 0});
    }

   
        render(){
        return ( 
                <React.Fragment>
                   <Header brands={this.state.brands} function={this.state.offervalue} changeBar={this.moveBar} barMenuStyle={this.state.barStyle}/>
                    {this.renderMainOffer(this.state.mainOffer)}
                    <div className="row">
                        <p>Discover More Online Casinos</p>
                    </div> 
                    <div className="scroll-menu-warpper">  
                         <div className="paddle-left">
                                <button className="button-left" onClick={this.scrollRight}>&#x3c;</button>
                        </div>
                        <div className="horizontal-scroll">
                        <Scroll function={this.changeMainOffer} changeBarWidth={this.changeBarWidth} brands={this.state.brands}/>
                         </div>
                    <div className="paddle-right">
                        <button className="button-right"onClick= {this.scrollLeft} >&#x3e;</button>
                    </div>
                     </div>

                    <div id="details">
                    <Reviews offervalue={this.state.mainOffer} barContainer={this.state.barContainer} brands={this.state.brands}/>
                    </div>
                        
                </React.Fragment>
        );
     }
}


ReactDOM.render(<Head styles={barStyles} barContainer={barContainer} brands={brands}/>,document.getElementById('main-offer'));
