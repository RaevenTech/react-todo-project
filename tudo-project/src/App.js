import "./App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import AddPost from "./AddPost";

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

    return (
        <div className="App">
            <Header title={name} />
            <AddPost posts={posts} setPosts={setPosts} />
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
