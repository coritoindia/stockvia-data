import React,{useState, useEffect} from "react";

import axios from "axios";
export default function Main(){

    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        axios.get(`https://coritoindia.github.io/stockvia/sample1.json`)
        .then(res=>{
            setMainData(res.data)
            })
    }, [])

    console.log(mainData)

    return (
        <div className="container my-5">
            <div className="hero-block">

            <table class="table">
           <thead>
             <tr>
               <th>Firstname</th>
               <th>Lastname</th>
              
             </tr>
           </thead>
       {mainData.map (i =>{
           return (
          
           <tbody>
             <tr>
               <td>{i.firstName}</td>
               <td>{i.lastName}</td>
               
             </tr>
             </tbody>
            
           )
          
       })}
        </table>


            </div>
    
    

        </div>
 

    )
}