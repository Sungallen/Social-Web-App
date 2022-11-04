import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = React.lazy(() => import('pages/loginPage'))

const AppRoutes = () => (
    <>
    <Suspense fallback= {<div>Loading</div>}>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
        </Routes>
    </Suspense>
        
    </>
)

export default AppRoutes
