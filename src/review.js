import React from 'react';
import brands from './brands.js'
import { relative } from 'path';

const numbers = [0,1,2,3,4,5,6,7]

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
    this.state = {offervalue : this.props.offervalue}
    this.renderFeatureImageAndContent = this.renderFeatureImageAndContent.bind(this);
    this.renderAllFeatureImagesAndContent = this.renderAllFeatureImagesAndContent.bind(this);
}

componentDidUpdate(prevProps) {
    if (prevProps.offervalue !== this.props.offervalue) {
      this.setState({offervalue: this.props.offervalue})
    }
    else {
        return false;
    }
  }

renderFeatureImageAndContent(locationinArray,currentoffervalue,src,p){
    return <FeatureImageAndContent  offervalue={locationinArray} src={src} paragraphtext={p} currentoffervalue={currentoffervalue} key={locationinArray}/>
}

renderAllFeatureImagesAndContent(arrayofnumbers,offervalue,keypoint){
    let src =[];
    let paragraphtext = []
    let i;

     if (keypoint == 1) {
         for(i=0;i<=7;i++){
         src.push(brands[i].keypoint1image)
         paragraphtext.push(brands[i].keypoint1)
        }
    }
     if  (keypoint == 2) {
            for(i=0;i<=7;i++){
            src.push(brands[i].keypoint2image)
            paragraphtext.push(brands[i].keypoint2)

           }
        }

    if (keypoint == 3) {
            for(i=0;i<=7;i++){
            src.push(brands[i].keypoint3image)
            paragraphtext.push(brands[i].keypoint3)

           }
    }
    else {
        for(i=0;i<=7;i++){
        src.push(brands[i].keypoint4image)
        paragraphtext.push(brands[i].keypoint4)

       }
    }

    let j = 0
    const listofItems = arrayofnumbers;
    const allItems = listofItems.map((number,index)=>
    this.renderFeatureImageAndContent(number,offervalue,src[index],paragraphtext[index])
    )
    return allItems
}

render(){
    return (
        <div id="features">
            <div className="features-container">

            <div className="feature-img-container">
               
                 {this.renderAllFeatureImagesAndContent(numbers,this.state.offervalue,2)}  
            </div>

            <div className="feature-img-container">

                 {this.renderAllFeatureImagesAndContent(numbers,this.state.offervalue,3)}

             </div>
        </div>
    </div>
    );
}


}

class FeatureImageAndContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {offervalue: this.props.offervalue, src:this.props.src, paragraphtext:this.props.paragraphtext}
    }

    render(){
        return(

            <React.Fragment>
            <div className="feature-content"> 

            <p className={this.state.offervalue == this.props.currentoffervalue ? "visible" :"hidden"}>{this.state.paragraphtext}</p>

        </div>
            <div className="img-container">
                <img className={this.state.offervalue == this.props.currentoffervalue ? "img-responsive visible" :"img-responsive hidden"} src={this.state.src}/>
            </div>
            </React.Fragment>
        );

    }
   
}
