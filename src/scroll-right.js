import animateScrollTo from 'animated-scroll-to';

export default function scrollRight(){
    let menuWidth =document.querySelector('.horizontal-scroll').getBoundingClientRect().width;
    let itemWidth= document.querySelector('.item').getBoundingClientRect().width;
    const options = {
        speed: 500,
        minDuration: 250,
        maxDuration: 1500,
        element: document.querySelector('.horizontal-scroll'),
        offset: 0,
        cancelOnUserAction: true,
        passive: true,
        horizontal: true,
        onComplete: function() {}
      };
    if (this.state.menuSize == 0){
        this.setState({menuSize : menuWidth},function(){
            this.setState({scrollPosition: this.state.scrollPosition - itemWidth},function(){
                let desieredPosition = this.state.scrollPosition;
                animateScrollTo(desieredPosition,options) })
    })
    
}
    else {
        this.setState({scrollPosition: this.state.scrollPosition - itemWidth},function(){
            let desieredPosition = this.state.scrollPosition;
            animateScrollTo(desieredPosition,options) })
}
         
}