import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import brands from './brands.js';
import {incoming} from './incoming.js';
import Offer from './offer.js';
import Scroll from './scroll.js';
import Reviews from './review.js';
import scrollLeft from './scroll-left.js';
import scrollRight from './scroll-right.js';
import Header from './header.js';

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



class Head extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainOffer: 0, icid: 54, scrollPosition: 0, menuSize: 0, clicksCounter :0, barStyle : this.props.styles }
        this.changeMainOffer = this.changeMainOffer.bind(this);
        this.scrollLeft = scrollLeft.bind(this);
        this.scrollRight = scrollRight.bind(this);
        this.moveBar = this.moveBar.bind(this);
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
   
    moveBar(){
        let x = '50%';
        let statusCopy = Object.assign({}, this.state.barStyle);
        statusCopy.transform = 'translateX('+x+')';
        this.setState({barStyle :statusCopy});
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
                        <Scroll function={this.changeMainOffer}/>
                         </div>
                    <div className="paddle-right">
                        <button className="button-right"onClick= {this.scrollLeft} >&#x3e;</button>
                    </div>
                     </div>

                    <div id="details">
                    <Reviews offervalue={this.state.mainOffer}/>
                    </div>
                        
                </React.Fragment>
        );
     }
}



ReactDOM.render(<Head styles={barStyles}/>,document.getElementById('main-offer'));
