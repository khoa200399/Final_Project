import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useAddCommentMutation } from "modules/features/Login/authApi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddComment = ({ roomId }) => {
  const navigate = useNavigate();
  const [addComment, { data, isLoading }] = useAddCommentMutation();
  const [comment, setComment] = useState("");
  const handleAddComment = () => {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");
    if (token && userInfo) {
      addComment({ roomId, comment });
    } else {
      navigate("/auth/login");
    }
  };
  return (
    <div>
      <TextArea rows={4} onChange={(e) => setComment(e.target.value)} />
      <Button type="primary" className="mt-2" onClick={handleAddComment}>
        Comment
      </Button>
    </div>
  );
};

export default AddComment;
