import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RouteList from "./pages/RouteList";
import RouteDetail from "./pages/RouteDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routes" element={<RouteList />} />
          <Route path="/routes/:id" element={<RouteDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
