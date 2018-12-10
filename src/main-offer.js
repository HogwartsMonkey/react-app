import React from 'react';
import brands from './brands.js';
import Video from './video.js';


export default class mainOffer extends React.Component{
    constructor(props){
        super(props);
        this.state = {offervalue: this.props.offervalue}
    }

    render(){
        return(
            <React.Fragment>
            <div className="col-1-3">
                <div className="offer-image">
                    <div className="img-container">
                    <img className="img-responsive" src={brands[this.state.offervalue].image}/>
                    </div>
                </div>
                <div className="offer-text">
                    <p>{brands[this.state.offervalue].offerBonus1}</p> 
                    <p>{brands[this.state.offervalue].offerBonus2}</p>
                    <p>{brands[this.state.offervalue].terms}</p>
    
                </div>
                    <div className="offer-button" onClick={()=>this.callOutgoing(brands[this.state.offervalue].offerlink,brands[this.state.offervalue].cpa,brands[this.state.offervalue].position,'page',this.props.icid)}>
                        <button className="main-button">Claim Bonus Offer </button>
                            
                    </div>
            </div>
            <div className="col-2-3">
            <Video className="video-container" videoId={brands[this.state.offervalue].videoId}/>
            </div>
            </React.Fragment>);
        }
    }