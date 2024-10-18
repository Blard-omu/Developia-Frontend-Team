import { useLocation, matchPath } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  const pathname = location?.pathname || '';

  const noNavOrFooterRoutes = ["/login", "/register"];

  const definedRoutes = [
    "/",
    "/about",
    "/contact",
    "/product/:productId", 
  ];

  const isKnownRoute = definedRoutes.some((route) =>
    matchPath({ path: route, exact: true }, pathname)
  );

  const ShowNavOrFooter = isKnownRoute && !noNavOrFooterRoutes.includes(pathname);

  return (
    <div className="2xl:container w-[100%] mx-auto h-auto min-h-[100vh] relative">
      {ShowNavOrFooter && <Nav />}
      {children}
      {ShowNavOrFooter && <Footer />}
    </div>
  );
};

export default LayoutWrapper;
