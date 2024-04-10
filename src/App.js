import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import MenuBar from "./routes/menu-bar/menu-bar.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/check-out/check-out.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  )
};

export default App;
