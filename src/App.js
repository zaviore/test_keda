import React from "react";

// layout
import Login from "./pages/login";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateWrapper from "./privateWrapper";

export default function App() {
  const [authenticated] = React.useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/' element={<Landing />} />
        <Route
          path='/dashboard'
          element={<Navigate replace to='/dashboard/sumary' />}
        />
        <Route element={<PrivateWrapper auth={authenticated} />}>
          <Route path='/dashboard/sumary' element={<Dashboard />}></Route>
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/404' element={<Navigate replace to='/404' />} />
        <Route path='*' element={<Navigate replace to='/404' />} />
      </Routes>
    </BrowserRouter>
  );
}
