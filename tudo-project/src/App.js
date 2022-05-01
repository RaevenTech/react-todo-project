import "./App.css";
import Header from "./Header";

function App() {
    const name = "Raeven";

    return (
        <div className="App">
            <Header title={name} />
            <p>Welcome to my blog</p>
        </div>
    );
}

export default App;
