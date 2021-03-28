import React,{useEffect,useState} from 'react';
import Admin from '../Admin/AdminComplaintBox';
import axios from 'axios'

const AcademicContainer = () => {
    
    const [academics,setAcademics] = useState(["Testing"])
    // const [time,setTime] = useState(["12/1/2020"])

    useEffect(() => {
        axios.put("https://grievence-backend.herokuapp.com/getAcademicComplaints").then((res)=>{

            var array = []
    

            for (let index = 0; index < res.data.length; index++) {
                    for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
                        array.push(res.data[index].comp[index1])   
                  
                             
                    }
            }
      

            setAcademics(array)
          
          
        })
    })

        return(
            <div className="div">
                {academics.map((hos,i)=> <Admin key={i} comp={hos} brand={"Academics"}/>)}
                
            </div>
        )
}

export default AcademicContainer;