import React from 'react';
import classes from './CalculateScore.css';
const percentToDecimal=(decimal)=>{
    return(decimal.toFixed(2)+'%')
}

const calScore=(total,goal)=>{
    return percentToDecimal(total/goal)
}
const calculateScore=(props)=>{
    return(

        <div className={classes.formatstyle}>
            <h1>Student Details</h1>
            <div className={classes.name}>
                <span>Name:</span><span>{props.name}</span>
            </div>
            <div className={classes.school}>
            <span>School:</span><span>{props.school}</span>
            </div>
            <div className={classes.total}>
            <span>Total:</span><span>{props.total}</span>
            </div>
            <div className={classes.marks}>
            <span>Marks:</span>
            <span>{calScore(props.total,props.goal)}</span>

            </div>



        </div>
    );
}

export default calculateScore;