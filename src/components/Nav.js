import { Link } from "react-router-dom"


export default function Nav() {
    return (
        <div className="Nav--container">
         <img src="/mainAssets/assets/shared/desktop/logo.svg" alt="Log"  />
            <div className="Nav--links">
            <Link to="Home">Home</Link>
            <Link to="About">About Us</Link> 
            <Link to="Subscribe">Create Your Plan</Link>
             </div>  
       
        </div>
    )
}
