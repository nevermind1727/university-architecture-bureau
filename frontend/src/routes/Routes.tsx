import { Routes as ReactRoutes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import HouseDetails from "../components/home/houses/HouseDetails";
import RequestPage from "../pages/RequestPage";
import OrderPage from "../pages/OrderPage";
import Footer from "../components/Footer";

const Routes = () => {
  return (
    <>
      <Navbar />
      <ReactRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/houses/:id" element={<HouseDetails />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
      </ReactRoutes>
      <Footer />
    </>
  );
};

export default Routes;
