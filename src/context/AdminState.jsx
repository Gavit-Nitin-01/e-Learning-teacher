import { json } from 'react-router-dom';
import AdminContext from './adminContext'
import { useEffect, useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:4000"

  const [stddata, setStdData] = useState([]);
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    fetchStdData(); 
    fetchAdminData();
  }, []);

  //fetch Student data 
  const fetchStdData = async () => {
    try {
      const response = await fetch(`${host}/api/admin/fetchStudent`);
      const jsonData = await response.json(); 
      setStdData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


   //fetch Admin data 
   const fetchAdminData = async () => {
    try {
      const response = await fetch(`${host}/api/admin/fetchAdmin`);
      const jsonData = await response.json(); 
      setAdminData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <AdminContext.Provider value={{stddata,adminData}}>
      {props.children}
    </AdminContext.Provider>
  )

}
export default NoteState;