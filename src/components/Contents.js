import React ,{useEffect,useState}from 'react'
import axios from "axios";

import { My_api_key } from '../config.js'                            // 🦄2)  My_api_key 




const Contents = () => {
    
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
      }).catch(function (error) {
          console.error(error);
      });
  
  

    }, [])


    return (
        <section>        
            <h2>covid graph</h2>
            <div className="contents">
            </div>      
        </section>
    )
}

export default Contents
