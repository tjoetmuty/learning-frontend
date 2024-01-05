import { Link, Outlet } from "react-router-dom";

export const ContactPage = () => {
  return (
    <>
      <h1>Hello ini Contact Us</h1>
      <nav>
        <ul>
          <li>
            <Link to="email">Email</Link>
          </li>
          <li>
            <Link to="phone">Phone</Link>
          </li>
          <li>
            <Link to="address">Address</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet/>
    </>
  );
};

export default ContactPage;
