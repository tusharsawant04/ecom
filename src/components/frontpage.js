import React,{useState} from 'react'
import "./style.css"
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './navbar';
import Footer from './Footer';
import Imgslide from './imgslide';
import Iteamcard from './iteamcard';
import NavBar from './MNavbar';
import Signcart from './signcart';


const uniqueList =[...new Set(Menu.map((curelem)=>{
    return curelem.category;
})
),"All"
];


const Resturant = () => {

    const [menudata, setMenudata] =useState(Menu);
    const[menulist,setmenulist]=useState(uniqueList);
    const filteritem=(category)=>{                                                                                          
        if(category==="All"){
            setMenudata(Menu);
            return
        }
        const updatelist=Menu.filter((curelem)=>{
            return curelem.category===category;
        })
        setMenudata(updatelist);
    };
    
    return (
        <>
        <NavBar/>

       <Navbar filteritem={filteritem} menulist={menulist}/>
       <Imgslide/>
       <Signcart/>
        <MenuCard menudata={menudata}/>

        </>
    )
}

export default Resturant
