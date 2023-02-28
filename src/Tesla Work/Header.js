import React,{useState} from "react";
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const[menu,setMenu] = useState(false)


  function menuhandler(e){
    e.preventDefault()
    setMenu(true)
  }

  function close(){
    setMenu(false)
  }


  return (


    <div className="header">
      <img src="teslaimages/logo.svg"></img>
      <ul>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panels</a>
        </li>
      </ul>
      <ul className="sideli">
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="" onClick={menuhandler}>Menu</a>
        </li>
      </ul>
      <div className="sidemenu">
        <ul style={{right:( menu===false) ? "-260px" : "0" }}>
          <CloseIcon className="close" onClick ={close}/>        
          <li><a href="">Model S</a></li>
          <li><a href="">Model 3</a></li>
          <li><a href="">Model X</a></li>
          <li><a href="">Model Y</a></li>
          <li><a href="">Solar Roof</a></li>
          <li><a href="">Solar Panel</a></li>
          <li><a href="">Existing Inventry</a></li>
          <li><a href="">Used Inventry</a></li>
          <li><a href="">Trade In</a></li>
          <li><a href="">Test Drive</a></li>
          <li><a href="">Powerwall</a></li>
          <li><a href="">Commercial Energy</a></li>
        </ul>
        
      </div>
    </div>
  );
}

export default Header;
