import React from "react";

function PostDisplay({ posts, handleDelete }) {
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {posts.map((post, index) => (
        <div key={index} className="post-box">
          <h3 data-testid={`post-title-${index}`}>{post.title}</h3>
          <p data-testid={`post-description-${index}`}>{post.description}</p>
          <button
            data-testid={`delete-button-${index}`}
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
