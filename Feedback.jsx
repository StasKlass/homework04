import React, { useState } from "react";

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div>
        <button onClick={handleLike}>Like</button>
        <span style={{ margin: "0 10px" }}>{likes}</span>
        <button onClick={handleDislike}>Dislike</button>
        <span style={{ margin: "0 10px" }}>{dislikes}</span>
      </div>
      <button onClick={resetResults} style={{ marginTop: "10px" }}>
        Reset Results
      </button>
    </div>
  );
};

export default Feedback;
