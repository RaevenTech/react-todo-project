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

    function login(firstName) {
        setName(firstName);
    }
    function onAddPost() {
        const newPostArray = [{ id: 999, title: "my new post" }, ...posts];
        setPosts(newPostArray);
    }

    return (
        <div className="App">
            <Header title={name} />
            <button onClick={onAddPost}>Add new post</button>
            <p>Welcome to my blog</p>
            <button
                onClick={(e) => {
                    login("Raeven");
                    console.log("Btn clicked");
                }}
            >
                Log In
            </button>
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
