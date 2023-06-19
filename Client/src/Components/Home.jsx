import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router";

import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    let [posts, setPosts] = useState([])
    let navigate = useNavigate()
       
    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get("http://localhost:4000/")
            let postData = response.data
            console.log(postData);
            setPosts(postData)
        }
        fetchData()
    }, [posts])

   


    // const remove =async (id) =>
    // {
       
            
    //        try {
    //         let res = await axios.delete(`http://localhost:4000/${id}`)
    //         let newdata = posts.filter(x=> x._id !== id)
    //         setPosts(newdata)
             
    //        } catch (err) {
    //           console.log(err);
    //        }

           

    // }




    
    return (
        <div>
            <Navbar />

           
           <h3 className="text-warning">To Add Tasks Click here</h3>
           <Link to='/tasks'>Add+</Link>


            <Footer  />

        </div>

    );
}

export default Home;