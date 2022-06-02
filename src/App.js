import { HashRouter, Routes, Route } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Pokemon from "./components/Pokemon";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UserInput from "./components/UserInput";
import "./style.css";
import "./color.css";


function App() {
  return (
    <HashRouter>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<UserInput />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
