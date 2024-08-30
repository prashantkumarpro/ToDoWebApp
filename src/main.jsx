
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import { ToDoesProvider } from './components/context/ToDoesProvider.jsx'

createRoot(document.getElementById('root')).render(

  <ToDoesProvider>
    <Root />
  </ToDoesProvider>
)
