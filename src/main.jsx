
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToDoesProvider } from './components/context/ToDoesProvider.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(

  <ToDoesProvider>
    <App />
  </ToDoesProvider>
)
