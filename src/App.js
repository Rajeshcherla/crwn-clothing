import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import MenuBar from "./routes/menu-bar/menu-bar.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (<p>I am the shop</p>)
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
