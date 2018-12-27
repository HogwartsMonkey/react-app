import React from 'react';
import {Outgoing} from './outgoing.js';
import Video from './video.js';
import brands from './brands.js';


const numbers = [0,1,2,3,4,5,6,7]

export default class Offer extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            offervalue: this.props.offervalue,
            brands: this.props.brands
        };
        this.renderMainImage = this.renderMainImage.bind(this);
        this.renderAllImages = this.renderAllImages.bind(this);
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.offervalue !== this.props.offervalue || prevProps.brands !==this.props.brands) {
          this.setState({offervalue: this.props.offervalue,brands: this.props.brands})
        }
        else {
            return false;
        }
      }
   
    callOutgoing(offerlink,cpa,position,page,icid){
        Outgoing(offerlink,cpa,position,page,icid);
    }
    

   renderMainImage(locationinArray,currentoffervalue){
       return <MainImage offervalue={locationinArray} currentoffervalue={currentoffervalue} key={locationinArray}/>
   }

   renderAllImages(arrayofnumbers,offervalue){
    const listofItems = arrayofnumbers;
    const allItems = listofItems.map((number)=>
    this.renderMainImage(number,offervalue)
    )

    return allItems
}
   
    render(){  
        return(
            <React.Fragment>
           
            <div className="col-1-3">
                <div className="offer-image">
                {this.renderAllImages(numbers,this.state.offervalue)}
                    
                </div>
                <div className="offer-text">
                    <p>{this.state.brands[this.state.offervalue].offerBonus1}</p> 
                    <p>{this.state.brands[this.state.offervalue].offerBonus2}</p>
                    <p>{this.state.brands[this.state.offervalue].terms}</p>
    
                </div>
                    <div className="offer-button" onClick={()=>this.callOutgoing(this.state.brands[this.state.offervalue].offerlink,this.state.brands[this.state.offervalue].cpa,this.state.brands[this.state.offervalue].position,'page',this.props.icid)}>
                        <button className="main-button">Claim Bonus Offer </button>
                            
                    </div>
            </div>
            <div className="col-2-3">
            <Video className="video-container" videoId={this.state.brands[this.state.offervalue].videoId}/>
            
            </div>
            
            </React.Fragment>);     
    }
}

class MainImage extends React.Component{
    constructor(props){
        super(props);
        this.state = { offervalue: this.props.offervalue}
    }
    
    render(){
     return   (
        <div className="img-container">
            <img className={this.state.offervalue == this.props.currentoffervalue ? "img-responsive visible": "img-responsive hidden"} src={brands[this.props.offervalue].image}/>
        </div>
        );
    }
}




