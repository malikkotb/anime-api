import Grid from "./components/Grid";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/anime/:slug" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
