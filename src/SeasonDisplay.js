import React from "react";
// import 'semantic-ui-css/semantic.min.css'
const Season = (lat,month)=>{
    //using ternary operator 
    return (lat>0)?(month>2 && month<9)?'Summer':'Winter':(month>2 && month<9)?'Winter':'Summer';

};

const seasonConfig = {
    Summer:{
        text:`Let's hit the beach!!!`,
        iconName:'sun',
    },
    Winter:{
        text:`It's chilly outside!!!`,
        iconName:`snowflake`,
    },
};



const SeasonDisplay = (props) =>{

    //details of props as it is an object
    const season = Season(props.lat,new Date().getMonth());
    const {text,iconName}=seasonConfig[season];
    console.log(`--details of props:`,props);
    return (<div>
        <i className={`${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;
