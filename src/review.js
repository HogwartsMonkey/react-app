import React from 'react';
import brands from './brands.js'
import { relative } from 'path';

export default class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state = { offervalue: this.props.offervalue,
            changeBarWidth: this.props.changeBarWidth
    }
}

    componentDidUpdate(prevProps) {
        if (prevProps.offervalue !== this.props.offervalue) {
          this.setState({offervalue: this.props.offervalue})
        }
      }

      render(){
          return (
          <div className="review-keypoints">
              <h2> What's Best about {brands[this.state.offervalue].name}</h2>
                <div className="col-1-4">
                    <div className="col-1-2">
                        <p>Overall Score</p>
                    </div>
                    <div className="col-2-2">
                    <div style={this.props.barContainer}>
                            <div style={brands[this.state.offervalue].barProgress1}></div>     
                         </div>
                    </div>
                    
                </div>
                <div className="col-1-4">
                    <div className="col-1-2">
                        <p>Gaming Experience</p>
                    </div>
                    <div className="col-2-2">
                    <div style={this.props.barContainer}>
                            <div id="progress-bar" style={brands[this.state.offervalue].barProgress2}></div>     
                         </div>
                    
                    </div>
                </div>
                <div className="col-1-4">
                    <div className="col-1-2">
                        <p>Support and Cashouts</p>
                    </div>
                    <div className="col-2-2">
                    <div id="progress-bar" style={this.props.barContainer}>
                            <div id="progress-bar" style={brands[this.state.offervalue].barProgress3}></div>     
                         </div>
                    </div>
                </div>
                <div className="col-1-4">
                    <div className="col-1-2">
                        <p>Games Selection</p>
                    </div>
                    <div className="col-2-2">
                        <div style={this.props.barContainer}>
                            <div id="progress-bar" style={brands[this.state.offervalue].barProgress4}></div>     
                         </div>
                       
                    </div>
                </div>

                <UniqueFeatures offervalue={this.state.offervalue}/>
          </div>
          );
      }
}

class UniqueFeatures extends React.Component { 
    constructor(props){
    super(props);
}

render(){
    return (
        <div id="features" style={{width:'100%',height: 100, backgroundColor: 'white',border:'1px solid #999393',position:'relative'}}>
            <div style={{position:'absolute',left:'50%',transform:'translateX(-50%)',height:100}}>
            <div style={{width:100,height:100,display:'inline-block',float:'left',position:'relative'}}>
                <div className="img-container">
                <img className="img-responsive" src={brands[this.props.offervalue].keypoint3image}/>
             </div>
            </div>
            <div style={{width:100,height:100,display:'inline-block',float:'left',position:'relative'}}>
                <div className="img-container">
                    <img className="img-responsive" src={brands[this.props.offervalue].keypoint2image}/>
                </div>
             </div>
        </div>
        </div>
    );
}


}
