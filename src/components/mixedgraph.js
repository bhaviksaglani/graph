
import React from 'react';
import {Bar} from 'react-chartjs-2';
import Data from './data.json';
import {Line} from 'react-chartjs-2';


const MixedGraph = function(){

var objMonthlyData= Data['Monthly Time Series'];
var objData = objMonthlyData;

var arrLabel=[];
var arrData=[];
var arrColor=[];
var objVolume = objMonthlyData;
var arrVolume=[];
var previousOpenValue = 0;
console.log(objMonthlyData)
for(var key1 in objMonthlyData) {
    arrLabel.push(key1);
}
for( var key1 in objData){
    
        
        if(objData[key1]["1. open"]>previousOpenValue){
            arrColor.push("green");
            
            arrData.push(objData[key1]["1. open"]);
            console.log(objData[key1]["1. open"]);
        }
        else{
            arrColor.push("red");
            
            arrData.push(0-(objData[key1]["1. open"]));
            console.log(objData[key1]["1. open"]);
        }
        previousOpenValue=objData[key1]["1. open"]   
    }
    


console.log("The color array is "+arrColor);
console.log("The data array is :"+arrData);

   
    console.log(objMonthlyData);
    for(var key in objVolume) {
        arrLabel.push(key);
    }
    console.log(arrLabel);
    for(var key in objVolume){
        arrVolume.push(objVolume[key]["5. volume"]);

    }
    console.log("The volume array is :"+arrVolume);

    return (
      <div>
           height={200}
           width={600}
           options= {{
               scales:{
                 y :{
                       min: -5000,
                       max: 25000,
                       stepSize: 5000,
                       
                   }
                }
            }}
          
          <Bar
      data={ {
          
        
        labels: arrLabel,

        
        datasets: [{
            label: 'Value of open data',
            data: arrData,
            backgroundColor: arrColor,
            borderColor: [
                'black',
            ],
            borderWidth: 1
        }]
        
    }}
   
     /> 
     
      <Line
      
      data = {{
        labels:arrLabel,

        datasets : [{
               label: 'My First Dataset',
               data: arrVolume,
               fill: true,
               borderColor: 'rgb(75, 192, 192)',
               tension: 0.1
                    }]
           }}
           
           >
             
            </Line>
            </div>
    );
        };
    export default MixedGraph

            