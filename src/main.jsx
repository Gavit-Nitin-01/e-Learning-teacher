import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';
import Error from './Components/Error/Error.jsx';
import Uploadvideo from './Components/MyActivity/Uploadvideo/Uploadvideo.jsx';
import Registration from './Components/Registration/Registration.jsx';
import ForgotPass from './Components/ForgotPass/ForgotPass.jsx';
import Uploadnotes from './Components/MyActivity/Uploadnotes/Uploadnotes.jsx'
import NotesT from './Components/TableData/NotesT.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Registration />} />
      <Route path='/forgotpass' element={<ForgotPass />} />
      <Route path="/" element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/upldvideo' element={<Uploadvideo />} />
        <Route path='/upldnotes' element={<Uploadnotes />} />
        <Route path='/noteslist' element={<NotesT/>}/>

      </Route>
      <Route path='*' element={<Error />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);