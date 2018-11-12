import React from 'react';
import brands from './brands.js'

export default class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state = { offervalue: this.props.offervalue }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.offervalue !== this.props.offervalue) {
          this.setState({offervalue: this.props.offervalue})
        }
      }

      render(){
          return (<div>
              <h2> What we like most about {brands[this.state.offervalue].name}</h2>
          </div>);
      }
}

