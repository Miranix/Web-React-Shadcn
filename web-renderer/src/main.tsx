import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import packageJson  from '../../package.json'

document.title = packageJson.name;
ReactDOM.createRoot(document.getElementById('root')!).render(
        <StrictMode>
        <App />
        </StrictMode>
)
