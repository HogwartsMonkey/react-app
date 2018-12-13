import React from 'react';
import brands from './brands.js'

export default class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state = { offervalue: this.props.offervalue
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
                        <p>{brands[this.state.offervalue].keypoint1}</p>
                    </div>
                    <div className="col-2-2"></div>
                </div>
                <div className="col-1-4">
                    <div className="col-1-2">
                        <p>{brands[this.state.offervalue].keypoint2}</p>
                    </div>
                    <div className="col-2-2"></div>
                </div>
                <div className="col-1-4">
                    <div className="col-1-2">
                        <p>{brands[this.state.offervalue].keypoint3}</p>
                    </div>
                    <div className="col-2-2">
                         <div className="img-container">
                            <div>
                            <img className="img-responsive" src={brands[this.state.offervalue].keypoint3image}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-4">
                    <div className="col-1-2">
                        <p>{brands[this.state.offervalue].keypoint4}</p>
                    </div>
                    <div className="col-2-2">
                        <div style={this.props.barContainer}>
                        <div style={this.props.barProgress}></div>
                        </div>
                       
                    </div>
                </div>
          </div>
          );
      }
}


