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
import NotesT from './Components/Tables/NotesT.jsx';
import Addcourse from './Components/MyActivity/course/Addcourse/Addcourse.jsx';
import Profile from './Components/Profile/Profile.jsx'
import CourseT from './Components/Tables/CourseT.jsx';
import AddCourse from './Components/MyActivity/Course_Video/AddCourse.jsx';
import ViewCourse from './Components/MyActivity/Course_Video/ViewCourse.jsx';
import PlayList from './Components/MyActivity/Course_Video/PlayList/PlayList.jsx';
import AddContent from './Components/MyActivity/course/AddContent/AddContent.jsx';
import AddVi from './Components/MyActivity/Course_Video/PlayList/AddVi.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Registration />} />
      <Route path='/forgotpass' element={<ForgotPass />} />
      <Route element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/upldvideo' element={<Uploadvideo />} />
        <Route path='/upldnotes' element={<Uploadnotes />} />
        <Route path='/noteslist' element={<NotesT />} />
        <Route path='/courselist' element={<CourseT />} />
        <Route path='/addtutorial' element={<Addcourse />} />
        <Route path='/addvideo' element={<ViewCourse/>} />
        <Route path='/addcourse' element={<AddCourse />} />
        <Route path='/videolist' element={<PlayList/>} />
        <Route path='/addcontent' element={<AddContent/>} />
        <Route path='/ddvideo' element={<AddVi/>} />
        <Route path='/profile' element={<Profile />} />
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