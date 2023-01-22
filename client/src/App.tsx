import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/config";

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Router>
          <Routes>
          </Routes>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
