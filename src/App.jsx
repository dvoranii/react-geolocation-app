import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Product from "./pages/Product/Product";
import Homepage from "./pages/Home/Homepage";
import Pricing from "./pages/Pricing/Pricing";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PageNav from "./Components/PageNav/PageNav";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";

function App() {
  // So as not to show on /app route
  function ConditionalNav() {
    const location = useLocation();

    if (location.pathname.startsWith("/app")) {
      return null;
    }

    return <PageNav />;
  }

  return (
    <div>
      <BrowserRouter>
        <ConditionalNav />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
