import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import icid from './incoming.js';
import brands from './brands.js';
import './styles.css';
import $ from 'jquery';
import YouTube from 'react-youtube';



console.log(brands[0].image);

class Video extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
   
      return (
        
        <YouTube className="video-container"
          videoId={this.props.videoId}
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
}

class Offer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
            <div className="col-1-3">
            <div className="offer-image">
                <div className="img-container">
                <img className="img-responsive" src={brands[this.props.offervalue].image}/>
                </div>
            </div>
            <div className="offer-text">
                <p>{brands[this.props.offervalue].offerBonus1}</p> 
                <p>{brands[this.props.offervalue].offerBonus2}</p>
            </div>
                <div className="offer-button">
                    <button className="main-button">
                        <p>Claim Bonus Offer</p>
                    </button>
                </div>
        </div>
        <div className="col-2-3">
        <Video className="video-container" videoId={brands[this.props.offervalue].videoId}/>
        </div>
        </React.Fragment>
        );
    }
}

class Head extends React.Component{

    renderMainOffer(j){
        return <Offer offervalue ={j}/>
    }
    
        render(){
        return ( 
                <React.Fragment>
                    {this.renderMainOffer(1)}
                    <div className="row">
                        <p>Discover Other Online Casinos</p>
                    </div> 
                    <div className="horizontal-scroll">
                        <Scroll/>
                    </div>
                    
            </React.Fragment>
        );
     }
}


class Item extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="item">
                <div className="img-container">
                    <img className="img-responsive" src={this.props.value}/>
                </div>
            </div>
        );
    }
}



class Scroll extends React.Component{
    renderItem(i){
       return  <Item value ={brands[i].image}/>
    }

    render(){
    return (
       <React.Fragment>
            {this.renderItem(1)}
            {this.renderItem(2)}
        </React.Fragment>
    );
    }
}




ReactDOM.render(<Head/>,document.getElementById('main-offer'));
