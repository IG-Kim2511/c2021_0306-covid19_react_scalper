// import
import React ,{useEffect,useState}from 'react'
import axios from "axios";
import {Bar, Doughnut } from 'react-chartjs-2';

// file
import { My_api_key } from '../config.js'                            // 🦄2)  My_api_key 


const Contents = () => {
    const [confirmedData, setConfirmedData] = useState({
        labels:["Jan","Feb","Mar"],
        datasets:[
            {
                label:'label',
                backgroundColor: 'green',
                fill:true,
                data:[10,4,3]
            }
        ]
    })
    
    useEffect(() => { 
        const options = {
            method: 'GET',
            url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
            headers: {
            'x-rapidapi-key': My_api_key ,                           // 🦄2)  My_api_key 
            'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com'
            }
         };
        
        axios.request(options).then(function (response) {
            console.log(response.data);

            console.log(response.data.countries_stat[0])       // 🦄4)  data

        }).catch(function (error) {
            console.error(error);
        });  
                
    }, [])


    return (
        <section>        
            <h2>covid graph</h2>
            <div className="contents">
                <div>
                <Bar
                    data={confirmedData}
                    width={100}
                    height={50}
                    options={{title:{display:true,text:'num1' , fontSize:16}},
                    {legend:{display:true, position:"bottom"}}
                
                }
                    />
                
                </div>


            </div>      
        </section>
    )
}

export default Contents
