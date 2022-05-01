import "./App.css";
import Header from "./Header";
import { useState } from "react";

function App() {
    const [name, setName] = useState("Guest");

    function login() {
        setName("Raeven");
    }

    return (
        <div className="App">
            <Header title={name} />
            <p>Welcome to my blog</p>
            <button onClick={login}>Log In</button>
        </div>
    );
}

export default App;
