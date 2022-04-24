import { Link } from "react-router-dom";


const NavBar = (props ) => {
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/users">Users</a>
        </li>
        {
           !props.user?(
               <>
            <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
            </li>
               </>
           ):(
               <>
                 <li className="nav-item">
                 <a className="nav-link" href="/dashboard">Dashboard</a>
                 </li>
                 <li className="nav-item">
                 <a className="nav-link" href="/logout">Logout</a>
                 </li>
               </>
           )
           
        }
        
      </ul>
    </div>
  </div>
</nav>
    </>;
}
 
export default NavBar;