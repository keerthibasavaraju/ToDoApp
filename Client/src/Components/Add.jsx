import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
    let [Task, setTask] = useState("")
    let navigate = useNavigate()

    

    let addlist = (e) => {
        e.preventDefault()
        let data = { Task }

        if (Task == "" ) {
            alert('please fill all the fields')
        } 
           else {
            axios.post('http://localhost:4000/Add', data)
                .then((res) => {
                    alert(res.data.message) //message from backend 
                    navigate('/tasks') //navigate to posts page
                }).catch((err) => {
                    alert(err.data.message)
                })
        }
        
        
    }

   

    return ( 
        <div>
            <Navbar/>
           <div>
           <form action=""  onSubmit={addlist}>
                <div className="border border-black m-5 p-3 rounded ">
                <div className="d-flex align-items-center justify-content-center align-items-center text-align-start ms-2">
                    <label htmlFor="text" className="m-3 p-0 fs-5">Task</label>
                    <input type="text" name="Task Name" value={Task} onChange={(e) => setTask(e.target.value)}/>
                </div>
             
                
                <button className="border border-warning bg-warning btn btn-lg mt-3">Save</button>
                </div>
            </form>
           </div>
            <Footer/>
        </div>
     );
}
 
export default Add;