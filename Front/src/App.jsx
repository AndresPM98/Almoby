import { Home, Login } from "./components/pages";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/organisms/Navbar";
import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/login" Component={Login} />
            </Routes>
        </div>
    );
}

export default App;
