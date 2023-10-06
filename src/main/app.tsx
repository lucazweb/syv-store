import React from 'react'
import Router from './router'
import { ReduxProvider } from '@/infra/redux/provider'

export default function App() {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  )
}
