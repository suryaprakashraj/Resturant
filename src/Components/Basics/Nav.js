import React,{useState} from 'react';
const Nav = ({filterItem})=>{
    
   
    return(
        <>
        <div className="navbar">
            <ul className="nav-list">
               <li className="nav-item"> <a href="#" onClick={()=>filterItem("breakfast")}> Breakfast </a> </li>
               <li className="nav-item"> <a href="#" onClick={()=>filterItem("lunch")}> Lunch </a> </li>
               <li className="nav-item"> <a href="#"onClick={()=>filterItem("dinner")}> Evening </a> </li>
               <li className="nav-item"> <a href="#"onClick={()=>filterItem("breakfast")}> Dinner </a> </li>
               <li className="nav-item"> <a href="#" onClick={()=>filterItem("all")}> All </a> </li>
            </ul>
        </div>
        </>
    )
}
export default Nav;