import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.jsx'
import GlobalState from './context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </GlobalState>
  </StrictMode>,
)
