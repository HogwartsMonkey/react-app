 import React from 'react';

 const numbers = [0,1,2,3,4,5,6,7]
 
 export default class Scroll extends React.Component{
    constructor(props){
        super(props);
        this.state = {brands: this.props.brands}
    }
    renderItem(i){
       return  <Item image={this.state.brands[i].image} changeMainOffer={this.props.function} id={i} key={i}/>
    }

    renderItemList(arrayofNumbers){
        
        const listofItems = arrayofNumbers;
        const allItems = listofItems.map((number)=>
        this.renderItem(number)
        )

        return allItems
    }
    render(){
    return (
        <React.Fragment>
            {this.renderItemList(numbers)}
        </React.Fragment>
    );
    }
}


  class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {image: this.props.image}
    }

    
    render(){
        return(
            <div className="item">
                <div className="img-container scroll-item"  onClick={()=>this.props.changeMainOffer(this.props.id)}>
                    <img className="img-responsive" src={this.state.image}/>
                </div>
            </div>
        );
    }
}

