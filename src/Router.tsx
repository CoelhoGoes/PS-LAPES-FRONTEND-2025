import { Routes, Route } from 'react-router-dom';
import { Teste } from './pages/teste';
import Login from './pages/Login';
import Registro from './pages/Registro';
import { Home } from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  );
}