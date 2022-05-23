import React from "react";

const season = (lat,month)=>{
    //using ternary operator 
    return (lat>0)?((month>2 && month<9) ?'Summer':'Winter'):((month>2 && month<9)?'Winter':'Summer');
};


const SeasonDisplay = (props) =>{

    //details of props as it is an object
    console.log(`--details of props:`,props);
    return (
        <div>This is {season(props.lat,new Date().getMonth())}</div>
    );
};

export default SeasonDisplay;
