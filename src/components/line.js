import React from 'react';
import {Line} from 'react-chartjs-2';
import Data from './data.json';

const GraphLine = function(){
    var objMonthlyData= Data['Monthly Time Series'];
    var objVolume = objMonthlyData;
    var arrLabel=[];
    var arrVolume=[];
    console.log(objMonthlyData);
    for(var key in objVolume) {
        arrLabel.push(key);
    }
    console.log(arrLabel);
    for(var key in objVolume){
        arrVolume.push(objVolume[key]["5. volume"]);

    }
    console.log("The volume array is :"+arrVolume);





// return (
//     <div>
//         <Line
        
//             height={700}
//             width={600}
//             options= {{
//                 maintainAspectRatio: true,
//                 scales:{
                  
//                    y :{
//                         min: -5000,
//                         max: 25000,
//                         stepSize: 5000,
                        
//                     }
//                 }

//             }}
//             data={ {
          
//             labels: arrLabel,
//             datapoints: [{
//                 label: 'Value of volume',
//                 data: [65, 59, 80, 81, 56, 55, 40, 60],
//                 backgroundColor: 'black',
//             }]
//         }}
        
//         /> 

        
        
// </div>
// )
// };


   
    return(
        <div>
        <Line
            
            height={200}
            width={600}
            options= {{
                maintainAspectRatio: true,
               
                scales:{
                  
                   y :{
                        min: -5000,
                        max: 25000,
                        stepSize: 5000,
                        
                    }
                }

            }}
            
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
            
        
            />
        </div>
    );
            } 
    export default GraphLine