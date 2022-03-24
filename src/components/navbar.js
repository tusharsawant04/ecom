import React from 'react'
import MenuCard from './MenuCard';


const navbar=({filteritem,menulist})=> {
    return (
        <>
             <nav className="navbar">
            <div className="btn-group">
                {
                    menulist.map((curelem)=>{
                    return(
                        <button className="btn-group__item" onClick={()=>filteritem(curelem)}>
                        {curelem}
                        </button>
                    );
                    }) }
               
       
            </div>c
        </nav>
        </>
    )
}

export default navbar
