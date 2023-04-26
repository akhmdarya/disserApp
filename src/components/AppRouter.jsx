import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import TextPage from "../pages/TextPage";
import SideNav from "./sidenav/SideNav";
import AudioPage from "../pages/AudioPage";
import ImagePage from "../pages/ImagePage";

const AppRouter = () => {

     const routes = [
        {path : '/text', element:<TextPage/>,exact:true},
         {path : '/audio', element:<AudioPage/>,exact:true},
        {path : '/image', element:<ImagePage/>,exact:true},
         { path: "*", element: <Navigate replace to="/image" /> },
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