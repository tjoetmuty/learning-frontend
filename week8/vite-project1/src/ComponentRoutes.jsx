import { Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonDetail from "./pages/Pokemon/PokemonDetail";
// const Products = () => {
//   return (
//     <div>
//       <Link to="/product/list">List</Link>
//       <Link to="/product/add">Add</Link>
//       <Outlet />
//     </div>
//   );
// };

const ComponentRoutes = () => {
  return (
    <>
      <div className="text-center p-4 bg-red-400 flex justify-between items-center">
        <h1 className="text-white font-bold">Welcome to my Website🌸</h1>
        <div className="flex gap-6 text-white ">
          <Link to="/">
            <p className="hover:text-yellow-400 cursor-pointer">Home</p>
          </Link>
          <Link to="/pokemon">
            <p className="hover:text-yellow-400 cursor-pointer">Pokemon</p>
          </Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="pokemon/:id" element={<PokemonDetail/>} />
        </Routes>
      </div>
    </>
  );
};
export default ComponentRoutes;
