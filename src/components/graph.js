
import React from 'react';
import {Bar} from 'react-chartjs-2';
// Let admin = require( './data.json ');
import Data from './data.json';


const Graph = function() {
   
    var objMonthlyData= Data['Monthly Time Series'];
    var objData = objMonthlyData;
    var objVolume = objMonthlyData;
    
    var arrLabel=[];
    var arrVolume=[];
    var arrData=[];
    var arrColor=[];
    var previousOpenValue = 0;
    console.log(objMonthlyData)
    for(var key in objMonthlyData) {
        arrLabel.push(key);
    }
    for( var key in objData){
        
            
            if(objData[key]["1. open"]>previousOpenValue){
                arrColor.push("green");
                
                arrData.push(objData[key]["1. open"]);
                console.log(objData[key]["1. open"]);
            }
            else{
                arrColor.push("red");
                
                arrData.push(0-(objData[key]["1. open"]));
                console.log(objData[key]["1. open"]);
            }
            arrVolume.push(objVolume[key]["5. volume"]/100000);
            previousOpenValue=objData[key]["1. open"]   
        }
        
    
    
    console.log("The color array is "+arrColor);
    console.log("The data array is :"+arrData);
          
           

        

    
  return (
      
    <div> 
      <Bar
      
      height={700}
       width={600}
        options ={{
          maintainAspectRatio: false,
          scales: {
            xAxes: {
                gridLines: {
                   display: false
                }
             },
              y:{
                  min: -5000,
                  max: 25000,
                  stepSize: 5000,
                  
              }
             
            
                  }
                }
          }
      
      data={ {
          
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        labels: arrLabel,

        
        datasets: [{
            label: 'Value of open data',
            data: arrData,
            backgroundColor: arrColor,
            borderColor: [
                'black',
            ],
            borderWidth: 1
        },{
          type:'line',
          label:'Volume',
          fill: true,
          data: arrVolume,
          borderColor: 'blue'
        }]
        
    }}
          

         
         
      
      
      /> 
   </div>

/* <p> {jsonData}</p> */
  );


};

export default Graph