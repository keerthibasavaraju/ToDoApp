import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Update = () => {

    // Feting the SingleData by its Id
      const navigate = useNavigate()
    let [content, setcontent] = useState([])

    let params = useParams()

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/${params.id}`)
            let postData = response.data
            setcontent(postData)
        }
        fetchData()
    }, [])

    // edit the Retrieved data and save

    const submit= async(id)=>
    {
       

        let data = {content}
        let res = await axios.put(`http://localhost:4000/update/${id}` , data)

        .then((res) => {
            alert(res.data.message) 
            navigate('/tasks') 
        }).catch((err) => {
            alert(err.data.message)
        })
       
    }

    return ( 
        
               <div>
               <Navbar/>
                   
                   <h1>{content.Task}</h1>
                      
                   <form action="">
                   <input type="text"  placeholder={content.Task} className="border-3" />
                   <button   onClick={()=>submit(content._id)} className="ms-4 btn btn-info" Component={Link} to={`/tasks`}>update</button>
                  </form>
                
                  <Footer/>
             
               </div>
            
     );
}
 
export default Update;
