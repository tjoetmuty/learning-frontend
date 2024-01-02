import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ContactPage } from "./pages/ContactPage";

const Reactrouter = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />}>
          <Route path="/email" element={<p>email: </p>}/>
          <Route/>
          <Route/>
        </Route>
      </Routes>
    </>
  );
};

export default Reactrouter;
