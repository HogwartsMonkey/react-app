import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import icid from './incoming.js';
import slotsHeaven from './brands.js';
import './styles.css';
import $ from 'jquery';
import YouTube from 'react-youtube';



console.log(slotsHeaven.image);

class Video extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
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

function Head(props){
        return (
     <React.Fragment>
        <div className="col-1-3">
            <div className="offer-image">
                <div className="img-container">
                <img className="img-responsive" src={props.image}/>
                </div>
            </div>
            <div className="offer-text">
                <p>{props.offer1}</p> 
                <p>{props.offer2}</p>
            </div>
                <div className="offer-button">
                    <button className="main-button">
                        <p>Claim Bonus Offer</p>
                    </button>
                </div>
        </div>
        <div className="col-2-3">
            <Video className="video-container" videoId={props.videoId}/>
        </div>
    </React.Fragment>
        
        );
}


ReactDOM.render(<Head offer1={slotsHeaven.offerBonus1} offer2={slotsHeaven.offerBonus2} image={slotsHeaven.image}  videoId={slotsHeaven.videoId}/>,document.getElementById('main-offer'));