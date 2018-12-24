

let brands = [];

const slotsHeaven = { 
    name:'Slots-Heaven',
    image: require('./assets/slots-heaven.png'),
    offerBonus1: 'Get 100% Up to £100',
    offerBonus2:'Get Also 200 Free Spins',
    terms:'Wagering X40. New Players Only | 18+. T&Cs Apply',
    videoId: '251H0IDGJAQ',
    offerlink: '31',
    cpa:'350',
    position: '1',
    keypoint1: 'Best Games',
    keypoint1image:'',
    keypoint2:'Fair Offer',
    keypoint2image:require('./assets/reviews-images/diamond.png'),
    keypoint3:'Pay with PayPal',
    keypoint3image:require('./assets/reviews-images/paypal.png'),
    keypoint4:'Exclusive Promotion',
    keypoint4image:'',
    barProgress1 : {
        width: '98%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress2 : {
        width: '90%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
    ,barProgress3 : {
        width: '100%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress4 : {
        width: '80%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
};  

const playOjo = { 
    name:'Play-OJO',
    image: require('./assets/play_ojo.png'),
    offerBonus1: 'Get 50 Free Spins',
    offerBonus2:'No Wagering Requirment',
    terms:'T&Cs Apply. New Players Only. 18+  ',
    videoId: '251H0IDGJAQ',
    offerlink: '53',
    cpa:'350',
    position: '2',
    barProgress1 : {
        width: '87%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress2 : {
        width: '80%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
    ,barProgress3 : {
        width: '90%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress4 : {
        width: '85%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
};  

const karamba = { 
    name:'Karamba',
    image: require('./assets/karamba.png'),
    offerBonus1: 'Get 100% Up to £500',
    offerBonus2:'Get Also 100 Free Spins',
    terms:'Wagering X35. New Players Only | 18+. T&Cs Apply.',
    videoId: 'io-f1TanwmU',
    offerlink: '33',
    cpa:'300',
    position: '3',
    barProgress1 : {
        width: '92%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress2 : {
        width: '90%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
    ,barProgress3 : {
        width: '100%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress4 : {
        width: '70%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
};  

const Casino888 = { 
    name:'888casino',
    image: require('./assets/888.png'),
    offerBonus1: 'Get 200% Up to £500',
    offerBonus2:'',
    terms:'Wagering X20. New Players Only | 18+. T&Cs Apply',
    videoId: '251H0IDGJAQ',
    offerlink: '17',
    cpa:'450',
    position: '4',
    barProgress1 : {
        width: '87%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress2 : {
        width: '85%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
    ,barProgress3 : {
        width: '100%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress4 : {
        width: '75%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
}; 

const mansionCasino = { 
    name:'Mansion',
    image: require('./assets/8.png'),
    offerBonus1: 'Get 10% Cashback',
    offerBonus2:'Get Also Up to £500',
    terms:'Wagering X40. New Players Only | 18+. T&Cs Apply',
    videoId: '251H0IDGJAQ',
    offerlink: '19',
    cpa:'500',
    position: '5',
    barProgress1 : {
        width: '85%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress2 : {
        width: '90%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
    ,barProgress3 : {
        width: '100%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress4 : {
        width: '70%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
}; 

const sloty = { 
    name:'Sloty',
    image: require('./assets/sloty-logo.png'),
    offerBonus1: 'Get Up to £1500 Welcome Package',
    offerBonus2:'Get Also 300 Free Spins',
    terms:'Wagering X40. New Players Only | 18+. T&Cs Apply',
    videoId: '251H0IDGJAQ',
    offerlink: '35',
    cpa:'280',
    position: '6',
    barProgress1 : {
        width: '90%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress2 : {
        width: '90%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
    ,barProgress3 : {
        width: '80%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress4 : {
        width: '80%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
}; 

const royalPanda = { 
    name:'Royal Panda',
    image: require('./assets/royal-panda-logo.png'),
    offerBonus1: 'Get 100 Up to £100',
    offerBonus2:'Get Also 10 Free Spins',
    terms:'Wagering X30. New Players Only | 18+. T&Cs Apply',
    videoId: '251H0IDGJAQ',
    offerlink: '22',
    cpa:'350',
    position: '7',
    barProgress1 : {
        width: '80%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress2 : {
        width: '80%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
    ,barProgress3 : {
        width: '80%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress4 : {
        width: '80%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
}; 

const casinoOfDreams = { 
    name:'Casino of Dream',
    image: require('./assets/casino_of_dreams.png'),
    offerBonus1: 'Get 100% Up to £1000',
    offerBonus2:'Get Also 50 Free Spins',
    terms:'Wagering X40. Min Deposit £20. New Players Only | 18+. T&Cs Apply',
    videoId: '251H0IDGJAQ',
    offerlink: '26',
    cpa:'300',
    position: '8',
    barProgress1 : {
        width: '75%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress2 : {
        width: '80%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
    ,barProgress3 : {
        width: '70%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    },
    barProgress4 : {
        width: '75%',
        height: '100%',
        backgroundImage:'-webkit-linear-gradient(left, #FF9800 21%, rgb(222, 161, 86) 65%, rgb(245, 231, 131) 100%)',
        transition: 'width 0.1s linear',
        borderRadius: 5
    }
}; 
 
brands.push(slotsHeaven);
brands.push(playOjo);
brands.push(karamba);
brands.push(Casino888);
brands.push(mansionCasino);
brands.push(sloty);
brands.push(royalPanda);
brands.push(casinoOfDreams);

export default brands;
