import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Logo from './assets/logo.png';
import './styles.css';



class Welcome extends React.Component {
    render()
            {

               return(
               <div>
               <h1>webpack config file</h1>
               <img src={Logo}></img>
               </div>);
            }
}

ReactDOM.render(<Welcome/>,document.getElementById('root'));