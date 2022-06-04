import React from "react";

const Season = (lat,month)=>{
    //using ternary operator 
    return (lat>0)?(month>2 && month<9)?'Summer':'Winter':(month>2 && month<9)?'Winter':'Summer';

};


const SeasonDisplay = (props) =>{

    //details of props as it is an object
    const season = Season(props.lat,new Date().getMonth());
    const text= (season==='Summer')?`Let's go to Beach`:`It's chilly out here`;
    console.log(`--details of props:`,props);
    return (
        <h1>{text}</h1>
    );
};

export default SeasonDisplay;
