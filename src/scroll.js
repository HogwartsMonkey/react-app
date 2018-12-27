 import React from 'react';

 const numbers = [0,1,2,3,4,5,6,7]
 
 export default class Scroll extends React.Component{
    constructor(props){
        super(props);
        this.state = {brands: this.props.brands}
        this.renderItem = this.renderItem.bind(this);
        this.renderItemList = this.renderItemList.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.brands !== this.props.brands) {
          this.setState({brands: this.props.brands,funcion(){{this.renderItemList(numbers)}}}
            
            )
        }
        else {
            return false;
        }
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

    componentDidUpdate(prevProps) {
        if (prevProps.image !== this.props.image) {
          this.setState({image: this.props.image})
        }
        else {
            return false;
        }
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

