import React from 'react'

function Header() {
  return (
    <div className='header'>
        <img src='teslaimages/logo.svg'></img>
        <ul>
            <li><a href = "">Model S</a></li>
            <li><a href = "">Model 3</a></li>
            <li><a href = "">Model X</a></li>
            <li><a href = "">Model Y</a></li>
            <li><a href = "">Solar Roof</a></li>
            <li><a href = "">Solar Panels</a></li>
        </ul>
        <ul>
            <li><a href = "">Shop</a></li>
            <li><a href = "">Account</a></li>
            <li><a href = "">Menu</a></li>
        </ul>
    </div>
  )
}

export default Header