import React from "react";
import "./comment.scss";

const Comment = ({ id, account, reply }) => {
  return (
    <div className="replyWrapper" key={id}>
      <div className="userAccount">
        {account}
        <span>&nbsp;</span>
        <span className="reply">{reply}</span>
      </div>
      <i className="fa-regular fa-heart" />
    </div>
  );
};

export default Comment;
