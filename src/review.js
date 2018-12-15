import React from 'react';
import brands from './brands.js'

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
              <h2> What we like most about {brands[this.state.offervalue].name}</h2>
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
          </div>
          );
      }
}


