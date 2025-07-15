import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}

export default App;