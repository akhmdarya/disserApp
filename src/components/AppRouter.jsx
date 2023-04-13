import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";

const AppRouter = () => {

     const routes = [
        {path : '/', element:MainPage,exact:true},
        // {path : '/posts', element:Posts,exact:true},
        // {path : '/posts/:id', element:PostIdPage,exact:true},
        // {path : '/error', element:NoMatch,exact:false}

    ]
    return (
        <Routes>
            {routes.map(route =>
                <Route element={<route.element/>} path={route.path} exact = {route.exact} key={route.path} />
            )}
        </Routes>
    );
};

export default AppRouter;