import React ,{useEffect,useState}from 'react'
import axios from "axios";

import { My_api_key } from './config.js'




const Contents = () => {
    
    useEffect(() => {        
     
    const options = {
        method: 'GET',
        url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
        headers: {
          'x-rapidapi-key': My_api_key ,
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
        <div>
        contents
            
        </div>
    )
}

export default Contents
