import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import SideNav from "./sidenav/SideNav";
import AudioPage from "../pages/AudioPage";

const AppRouter = () => {

     const routes = [
        {path : '/', element:<MainPage/>,exact:true},
         {path : '/audio', element:<AudioPage/>,exact:true},
        // {path : '/posts', element:Posts,exact:true},
        // {path : '/posts/:id', element:PostIdPage,exact:true},
        // {path : '/error', element:NoMatch,exact:false}

    ]
    return (
        <div style={{display:"flex"}}>
            <SideNav/>
        <Routes>


            {routes.map(route =>
                <Route element={route.element} path={route.path} exact = {route.exact} key={route.path} />
            )}


        </Routes>
        </div>
    );
};

export default AppRouter;