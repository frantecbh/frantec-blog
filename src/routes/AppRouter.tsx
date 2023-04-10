import React from 'react'

import { Routes, Route} from "react-router-dom";
import { Layout } from '../Layout';
import { Home } from '../pages/Home';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          </Route>
          </Routes>   
  )
}
