import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import AppRouter from "./components/AppRouter";

function App() {
    useEffect(()=>{
        let resp = axios.get(`http://127.0.0.1:5000/example`)
            .then(res => {
               resp = res.data

            })


    },[])
  return (
      <BrowserRouter>
          {/*<Navbar/>*/}
          <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
