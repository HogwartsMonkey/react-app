import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import brands from './brands.js';
import './styles.css';
import $ from 'jquery';
import YouTube from 'react-youtube';
import Scroll from './scroll.js';
import Reviews from './review.js';
import Incoming from './incoming.js';
import icid from './incoming.js';




export default class Video extends React.Component {
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



console.log(brands[0].image);


class Offer extends React.Component{
    constructor(props){
        super(props);
        this.state = { offervalue: this.props.offervalue};
    }

    componentDidUpdate(prevProps) {
        if (prevProps.offervalue !== this.props.offervalue) {
          this.setState({offervalue: this.props.offervalue})
        }
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
                <div className="offer-button">
                    <button className="main-button">
                        <p>Claim Bonus Offer</p>
                    </button>
                </div>
        </div>
        <div className="col-2-3">
        <Video className="video-container" videoId={brands[this.state.offervalue].videoId}/>
        </div>
        </React.Fragment>
        );
    }
}

class Head extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainOffer: 1}
        this.changeMainOffer = this.changeMainOffer.bind(this);
    }

    changeMainOffer(arrayLocation){
        this.setState({mainOffer: arrayLocation})
    }

    renderMainOffer(j){
        return <Offer offervalue ={j}/>
    }
    
    incoming(){
        {Incoming()};
    }
        render(){
        return ( 
                <React.Fragment>
                    {this.renderMainOffer(this.state.mainOffer)}
                    <div className="row">
                        <p>Discover More Online Casinos</p>
                    </div> 
                    <div className="horizontal-scroll">
                        <Scroll function={this.changeMainOffer}/>
                    </div>
                    <div className="details">
                    <Reviews offervalue={this.state.mainOffer}/>
                    </div>
                   <incoming/>
            </React.Fragment>
        );
     }
}



ReactDOM.render(<Head/>,document.getElementById('main-offer'));
