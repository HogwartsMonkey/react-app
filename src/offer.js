import React from 'react';
import brands from './brands.js';
import {Outgoing} from './outgoing.js';
import Video from './video.js';


const numbers = [0,1,2,3,4,5,6,7]

export default class Offer extends React.Component{
    constructor(props){
        super(props);
        this.state = { offervalue: this.props.offervalue};
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.offervalue !== this.props.offervalue) {
          this.setState({offervalue: this.props.offervalue})
        }
        else {
            return false;
        }
      }
   
    callOutgoing(offerlink,cpa,position,page,icid){
        Outgoing(offerlink,cpa,position,page,icid);
    }
    

   renderMainImage(i){
       return <mainImage offervalue={i}/>
   }

    render(){  
        return(
            <React.Fragment>
            <div className="col-1-3">
                <div className="offer-image">
                {this.renderMainImage(numbers[0])}
                    <div className="img-container">
                    <img className={this.state.offervalue == 0 ? "img-responsive visible": "img-responsive hidden"} src={brands[0].image}/>
                    </div>
                    <div className="img-container">
                    <img className={this.state.offervalue == 1 ? "img-responsive visible": "img-responsive hidden"} src={brands[1].image}/>
                    </div>
                    <div className="img-container">
                    <img className={this.state.offervalue == 2 ? "img-responsive visible": "img-responsive hidden"} src={brands[2].image}/>
                    </div>
                    <div className="img-container">
                    <img className={this.state.offervalue == 3 ? "img-responsive visible": "img-responsive hidden"} src={brands[3].image}/>
                    </div>
                    <div className="img-container">
                    <img className={this.state.offervalue == 4 ? "img-responsive visible": "img-responsive hidden"} src={brands[4].image}/>
                    </div>
                    <div className="img-container">
                    <img className={this.state.offervalue == 5 ? "img-responsive visible": "img-responsive hidden"} src={brands[5].image}/>
                    </div>
                    <div className="img-container">
                    <img className={this.state.offervalue == 6 ? "img-responsive visible": "img-responsive hidden"} src={brands[6].image}/>
                    </div>
                    <div className="img-container">
                    <img className={this.state.offervalue == 7 ? "img-responsive visible": "img-responsive hidden"} src={brands[7].image}/>
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





