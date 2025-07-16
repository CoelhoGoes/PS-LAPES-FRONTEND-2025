import { Routes, Route } from 'react-router-dom';
import { Teste } from './pages/teste';
import Login from './pages/Login';
import { Home } from './pages/Home';
import MenuPage from './pages/MenuPage';
import DishDetailPage from './pages/DishDetailPage';
import Register from './pages/Register';

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/teste" element={<Teste />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/dish/:id" element={<DishDetailPage />} />
    </Routes>
  );
}