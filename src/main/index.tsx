import React from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from '@/presentation/styles/global'
import App from './app'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
)
