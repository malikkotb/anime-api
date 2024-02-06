import Grid from "./components/Grid";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><Grid /></>} />
        <Route path="/anime/:slug" element={<><Header /><Details /></>} />
        // Other routes...
      </Routes>
    </Router>
    // <div>
    //   <Header />
    //   <Grid />
    // </div>
  );
}

export default App;
