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
        <div className="row">
            <p>Discover Other Online Casinos</p>
         </div> 
    </React.Fragment>
        );
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

function App(){
    return  (<React.Fragment>
                            <Scroll/>
        </React.Fragment>); 
    }



ReactDOM.render(<Head offer1={brands[2].offerBonus1} offer2={brands[2].offerBonus2} image={brands[2].image}  videoId={brands[2].videoId}/>,document.getElementById('main-offer'));
ReactDOM.render(<App/>,document.getElementById('horizontal-scroll'));