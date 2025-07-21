# 🍽️ PS-LAPES Front-End

Front-end do projeto **PS-LAPES Full-Stack 2025**, desenvolvido em React + Vite + TypeScript + Tailwind CSS.
Este projeto oferece uma interface moderna, responsiva e completa para um sistema de pedidos de restaurante, com áreas para cliente e administrador.

---

## ✅ Funcionalidades

* Autenticação com login e registro de usuários
* Diferenciação entre cliente e administrador
* Cardápio filtrado por categorias
* Página de detalhes de pratos
* Carrinho de compras (adicionar, remover, atualizar quantidade)
* Checkout com envio de pedidos para backend
* Página **Meus Pedidos** (cliente)
* Painel **Admin Pedidos**: listar, filtrar e atualizar status
* Painel **Admin Usuários**: listar, editar tipo e excluir
* Painel **Admin Categorias e Pratos**: CRUD de pratos e categorias
* Tela de **Relatórios**: total arrecadado, pedidos, gráficos de vendas por categoria
* Responsividade total e feedback visual (hover, focus, status)
* Navbar responsiva adaptável para mobile e desktop

---

## 📊 Tecnologias & Bibliotecas

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [Recharts](https://recharts.org/) (gráficos)
* [lucide-react](https://lucide.dev/) (ícones)
* [shadcn/ui](https://ui.shadcn.com/) (opcional, para componentes prontos)

---

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/PS-LAPES-FRONTEND-2025.git
cd PS-LAPES-FRONTEND-2025

# Instale as dependências
npm install
```

---

## 🚀 Rodando localmente

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Build para produção

```bash
npm run build
```

---

## 🔑 Configuração do ambiente

No arquivo `.env` (crie se não existir):

```bash
VITE_API_URL=http://localhost:3000/api
```

---

## 📦 Estrutura resumida

```
src/
├── components/        # Navbar, Footer, etc
├── context/           # AuthContext, CartContext
├── pages/             # MenuPage, Login, Register, AdminPages, etc
├── services/          # api.ts (Axios)
├── App.tsx           # App principal
├── Router.tsx        # Configuração das rotas
└── index.tsx
```

---

## 🛡️ Proteção de rotas

* **<PrivateRoute>** → protege rotas acessíveis apenas a usuários logados
* **<AdminRoute>** → protege rotas acessíveis apenas a administradores

---

## 📊 Dashboard & Relatórios

A tela **AdminReportsPage** exibe:

* Número total de pedidos
* Valor total arrecadado
* Quantidade de pratos vendidos por categoria (gráfico de pizza)

---

## ⭐ Funcionalidades extras (opcionais)

* Persistência do carrinho no localStorage
* Quantidade de itens no carrinho na Navbar
* Dashboard admin mais completo (últimos pedidos, KPIs diários)
* Tema claro/escuro (dark mode)
* Login social (Google, GitHub)
* Testes automatizados (unitários e e2e)

---

## 📌 Status do projeto

✅ Funcionalidades obrigatórias: **100% concluídas**
⚙️ Preparado para deploy (Vercel, Netlify, etc.)

---

## 📄 Licença

MIT
