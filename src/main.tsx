import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import createRouter from "./router"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={createRouter()} />
    </StrictMode>,
)
