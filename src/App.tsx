import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Router } from './Router'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}
