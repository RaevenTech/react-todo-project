import "./App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

function App() {
    const [name, setName] = useState("Guest");
    const [posts, setPosts] = useState([]);

    useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, []);

    function login() {
        setName("Raeven");
    }

    return (
        <div className="App">
            <Header title={name} />
            <p>Welcome to my blog</p>
            <button onClick={login}>Log In</button>
            <ul>
                {posts.map((post) => (
                    <Row key={post.id}>
                        <li>{post.title}</li>
                    </Row>
                ))}
            </ul>
        </div>
    );
}

export default App;
