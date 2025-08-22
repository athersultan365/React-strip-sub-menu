import React, {createContext, useState} from "react";

import Data from './Data'


export const AppContext = createContext()


export const AppProvider = ({children})=>{

    const [isSubmenu, setisSubmenu] = useState(false)
    const [isSidebaropen, setisSidebaropen] = useState(false);
    const [page, setpage] = useState({page: '', links: []});
    const [location, setlocation] = useState({});


    const openSidebar = ()=>{
        setisSidebaropen(true)
        console.log("true");
    }
    const closeSidebar = ()=>{
        setisSidebaropen(false)
    }

    const openSubmenu =(text, cordinates)=>{
        console.log(text);
        const page = Data.find((link)=> link.page === text)
        console.log(page);
        setpage(page);
        setlocation(cordinates);
       setisSubmenu(true);
        
    }
    // console.log(location);

    const closeSubmenu = ()=>{
        setisSubmenu(false)
    }

    return(

        <AppContext.Provider value={{

            isSidebaropen,
            openSidebar,
            closeSidebar,
            isSubmenu,
            openSubmenu,
            closeSubmenu,
            page,
            location,
        }}>

        {children}

        </AppContext.Provider>


    )

}