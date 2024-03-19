import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product/Product";
import Homepage from "./pages/Home/Homepage";
import Pricing from "./pages/Pricing/Pricing";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PageNav from "./Components/PageNav/PageNav";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";
import CityList from "./Components/CityList/CityList";
import CountryList from "./Components/CountryList/CountryList";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        console.error("There was an error loading the data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
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
          <Route index element={<Homepage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route path="form" element={<p>Form</p>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
