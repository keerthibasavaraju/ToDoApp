import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
    <div>
        <div className="d-flex align-items-center justify-content-between mx-5 my-4 bg-info-subtle">
           <div className="logo d-flex align-items-center">
            <h1 className="fw-bold ps-3">To-Do</h1>
            <h1 className="text-warning">.</h1>
           </div>
           <div className="links">
            <Link  className="me-5 text-decoration-none text-dark fs-4" to='/'>Home</Link>
            {/* <Link className="me-5 text-decoration-none text-dark fs-4"  to='/Add'>Add</Link> */}
            <Link className="me-5 text-decoration-none text-dark fs-4" to='/tasks'>Tasks</Link>
            
           </div>
           
        </div>
    </div>

     );
}
 
export default Navbar;