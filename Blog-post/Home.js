import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const handleCreatePost = () => {
    if (title.trim() && description.trim()) {
      setPosts([...posts, { title, description }]); // Add new post to the list
      setTitle(""); // Clear title input
      setDescription(""); // Clear description input
    }
  };
  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };
  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
        <button
          data-testid="create-button"
          className="mt-10"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Home;
