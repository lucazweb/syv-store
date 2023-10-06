import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '@/presentation/pages/home'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
