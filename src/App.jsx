import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/SmoothScroll";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
function App() { 
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Add your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Page404/>} />
      </Routes>
    </>
  );
}

export default App;