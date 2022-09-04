import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'


const ProtectedRoutes = () => {
   const nameTrainer = useSelector(state=>state.nameTrainer)


 if (nameTrainer) {
    return <Outlet/>
 }else{
    return <Navigate to='/'/>
 }
}

export default ProtectedRoutes