import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {incoming} from './incoming.js';
import Offer from './offer.js';
import Scroll from './scroll.js';
import Reviews from './review.js';





class Head extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainOffer: 0, icid: 54, scrollLeft: 0}
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
        let item= document.querySelector('.img-container.scroll-item');
        let scrollX= item.getBoundingClientRect().width;
        let menuSize = e.getBoundingClientRect().width;
        console.log({scrollX})
        console.log({menuSize});
        this.setState({scrollLeft:scrollX + this.state.scrollLeft +20})
        if ( menuSize < this.state.scrollLeft + scrollX){
            return 0;
        }
        else{
        e.scrollLeft = this.state.scrollLeft;
        }    
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
