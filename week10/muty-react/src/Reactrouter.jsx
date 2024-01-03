import { Routes, Route, Link } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ContactPage } from "./pages/ContactPage";
    // <Routes>
    //   <Route path="/" element={<Homepage />} />
    //   <Route path="/contact" element={<ContactPage />}>
    //     <Route path="email" element={<p>email: tjmutyahmd27@gmail.com</p>}/>
    //     <Route path="phone" element={<p>phone : +62 856 9606 5930</p>} />
    //     <Route path="address" element={<p>address : palu</p>} />
    //   </Route>
    // </Routes>

const Reactrouter = () => {
  const routes = useRoutes([
    {
      path:'/',
      element: <Homepage/>
    },
    {
      path:'/contact',
      element: <ContactPage/>,
      children: [
        {
        path: 'email',
        element: <p>email: tjmutyahmd27@gmail.com</p>
        },
        {
        path: 'phone',
        element: <p>phone : +62 856 9606 5930</p>
        },
        {
        path: 'address',
        element: <p>address : palu</p>
        },
      ]
    },
  ])
  return routes;
};

export default Reactrouter;
