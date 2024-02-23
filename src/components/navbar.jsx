import { Link } from "react-router-dom";
import "../styles/navbar.css"
const Navbar = () => {
    return ( 
        <div className="navbar">
           
              <div className="nav">
              <h1>Ecommerce</h1>
           <div className="links">
      
            <Link to="/"> Home </Link>
            <Link to="/Cart"> Cart </Link>
           </div>
        </div>

        </div>
    
     );
}
 
export default Navbar;