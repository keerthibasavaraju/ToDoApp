import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Alert } from "bootstrap";


const Tasks = () => {

    let [Task, setTask] = useState("")
    let navigate = useNavigate()


// requesting to Add the Data to database
    let addlist = (e) => {
        e.preventDefault()
        let data = { Task }

        if (Task == "") {
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

    // Fetching the Data from database

    let [posts, setPosts] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get("http://localhost:4000/")
            let postData = response.data
            console.log(postData);
            setPosts(postData)
        }
        fetchData()
    }, [posts])


// Deleting the Data by its Id 
    const remove = async (id) => {


        try {
            let res = await axios.delete(`http://localhost:4000/${id}`)
            let newdata = posts.filter(x => x._id !== id)
            setPosts(newdata)

        } catch (err) {
            console.log(err);
        }



    }

  


    return (
        <div>
            <Navbar />

            <div >
                <form action="" onSubmit={addlist} id="form">
                    <div className="border border-black m-5 p-3 rounded ">
                        <div className="d-flex align-items-center justify-content-center align-items-center text-align-start ms-2">
                            <label htmlFor="text" className="m-3 p-0 fs-5 text-secondary">Task</label>
                            <input type="text" name="Task Name" value={Task} onChange={(e) => setTask(e.target.value)} />
                        </div>


                        <button className="border border-warning bg-warning btn btn-lg mt-3" >Add</button>
                    </div>
                </form>
            </div>

            <div>
                {

                    posts.map((x) =>
                    (
                        <div>

                            <div className="m-5 d-flex justify-content-around align-items-center border border border-dark-subtle p-2 bg-dark">


                                <h3 className="text-light">Task : {x.Task} </h3>


                                <div>
                                    <Link to={`/update/${x._id}`} className="me-3 btn btn-outline-success "  >Update</Link>
                                    <button onClick={() => { remove(x._id) }} className="btn btn-outline-danger me-3">Delete</button>
                                    <input type="checkbox" className="border border-success" />
                                   
                                </div>


                            </div>
                        </div>

                    ))

                }
            </div>

            <Footer />
        </div>
    );
}


export default Tasks;