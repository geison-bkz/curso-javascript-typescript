import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<MyRoute />}>
        <Route exact path="/" element={<Home />} />
      </Route>

      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
