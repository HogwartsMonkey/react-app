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
    this.renderFeatureImage = this.renderFeatureImage.bind(this);
    this.renderAllFeatureImages = this.renderAllFeatureImages.bind(this);
}

componentDidUpdate(prevProps) {
    if (prevProps.offervalue !== this.props.offervalue) {
      this.setState({offervalue: this.props.offervalue})
    }
    else {
        return false;
    }
  }

renderFeatureImage(locationinArray,currentoffervalue,src){
    return <FeatureImage offervalue={locationinArray} src={src} currentoffervalue={currentoffervalue} key={locationinArray}/>
}

renderAllFeatureImages(arrayofnumbers,offervalue,keypoint){
    let src =[];
    let i;

     if (keypoint == 1) {
         for(i=0;i<=7;i++){
         src.push(brands[i].keypoint1image)
        }
    }
     if  (keypoint == 2) {
            for(i=0;i<=7;i++){
            src.push(brands[i].keypoint2image)
           }
        }

    if (keypoint == 3) {
            for(i=0;i<=7;i++){
            src.push(brands[i].keypoint3image)
           }
    }
    else {
        for(i=0;i<=7;i++){
        src.push(brands[i].keypoint4image)
       }
    }

    let j = 0
    const listofItems = arrayofnumbers;
    const allItems = listofItems.map((number,index)=>
    this.renderFeatureImage(number,offervalue,src[index])
    )
    return allItems
}

render(){
    return (
        <div id="features" style={{width:'100%',height: 100, backgroundColor: 'white',border:'1px solid rgb(230, 229, 229)',position:'relative'}}>
            <div style={{width:'80%',position:'absolute',left:'50%',transform:'translateX(-50%)',height:100}}>
            <div style={{width:100,height:100,display:'inline-block',float:'left',position:'relative'}}>
                 {this.renderAllFeatureImages(numbers,this.state.offervalue,3)}
            </div>
            <div style={{width:100,height:100,display:'inline-block',float:'left',position:'relative'}}>
                <div className="img-container">
                    {this.renderAllFeatureImages(numbers,this.state.offervalue,2)}
                </div>
             </div>
        </div>
        </div>
    );
}


}

class FeatureImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {offervalue: this.props.offervalue, src:this.props.src}
    }

    

    render(){
        return(
            <div className="img-container">
            <img className={this.state.offervalue == this.props.currentoffervalue ? "img-responsive visible" :"img-responsive hidden"} src={this.state.src}/>
         </div>
        );

    }
   
}
