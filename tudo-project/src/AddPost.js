import React from "react";
import { useState } from "react";

export default function AddPost(props) {
    const [getPostTitle, setPostTitle] = useState("");
    function onAddPost(e) {
        e.preventDefault();
        const newPostArray = [{ id: 999, title: getPostTitle }, ...props.posts];
        props.setPosts(newPostArray);
    }

    return (
        <form onSubmit={onAddPost}>
            <input
                type="text"
                id="post-title"
                value={getPostTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <button type="submit">Add Post</button>
        </form>
    );
}
