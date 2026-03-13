import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemData from './context/ThemData.jsx'

createRoot(document.getElementById('root')).render(
<ThemData>
    <App />
</ThemData>
  

)
