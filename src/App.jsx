import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CategoryProducts from "./pages/CategoryProducts";
import Home from "./pages/Home";

const App = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryProducts />} />
        <Route path="*" element={<div><h1>not found</h1></div>} />
      </Routes>
    </>
  );
};

export default App;
