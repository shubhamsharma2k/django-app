import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/config";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Router>
          <Navbar />

          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
          </Routes>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
