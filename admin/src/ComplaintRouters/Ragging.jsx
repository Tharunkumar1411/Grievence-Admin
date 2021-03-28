import React,{useEffect,useState} from 'react';
import Admin from '../Admin/AdminComplaintBox';
import axios from 'axios'

const RaggingContainer = () => {
    const [raggings,setRagging] = useState(["Testing"])
    // const [time,setTime] = useState(["12/1/2020"])
    useEffect(() => {
        axios.put("https://grievence-backend.herokuapp.com/getRaggingComplaints").then((res)=>{

            var array = []
            var timeLog = []

            for (let index = 0; index < res.data.length; index++) {
                for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
                    array.push(res.data[index].comp[index1])                
                }
        }

        
    //     for (let timeIndex = 0; timeIndex < res.data.length; timeIndex++) {
    //         for (let timeIndex1 =  (res.data[timeIndex].date.length) - 1; timeIndex1 >= 0 ; timeIndex1--) {
    //             timeLog.push(res.data[timeIndex].date[timeIndex1])                
    //         }
    // }
            setRagging(array)
            // setTime(timeLog)
        })
    });

        return(
            <div className="div">
                {raggings.map((hos,i)=> <Admin key={i} comp={hos} brand={"Ragging"}/>)}
            </div>
        )
}

export default RaggingContainer;