export let barStyles = {
    transform: 'translateX(0)',
    position:'absolute',
    left:0,
    display:'inline-block',
    width:'25%',
    padding:0,
    height:'100%',
    backgroundColor:'grey',
    transition: 'transform 0.1s linear'
}

 export function moveBar(to){
    let x = to+'50%';
    let statusCopy = Object.assign({}, this.state.barStyle);
    statusCopy.transform = 'translateX('+x+')';
    this.setState({barStyle :statusCopy});
}