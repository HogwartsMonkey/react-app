import animateScrollTo from 'animated-scroll-to';
import brands from './brands.js';

export default function scrollLeft(){
    let menuWidth =document.querySelector('.horizontal-scroll').getBoundingClientRect().width;
    let itemWidth= document.querySelector('.item').getBoundingClientRect().width;
    let itemsInWindow = Math.round(menuWidth/(itemWidth+20));
    let itemsCount = brands.length;
    let maxClicks = itemsCount - itemsInWindow;
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
    if (this.state.menuSize == 0 ){
        this.setState({menuSize : menuWidth},function(){
          this.setState({scrollPosition: this.state.scrollPosition + itemWidth, clicksCounter: this.state.clicksCounter+1},function(){
                let desieredPosition = this.state.scrollPosition;
               
                animateScrollTo(desieredPosition,options) })
    })
    
}
    else if (this.state.clicksCounter < maxClicks){
        this.setState({scrollPosition: this.state.scrollPosition + itemWidth,clicksCounter: this.state.clicksCounter+1},function(){
            let desieredPosition = this.state.scrollPosition;
            
            animateScrollTo(desieredPosition,options) })
}
    else {
        return 0;
    }
   ;
   console.log(this.state.clicksCounter);
   console.log(this.state.scrollPosition);
   console.log({menuWidth});
   console.log(itemsInWindow);
   console.log(itemsCount);
   console.log({maxClicks});
}