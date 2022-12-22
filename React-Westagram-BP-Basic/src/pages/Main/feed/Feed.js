import React, { useState } from "react";
import Comment from "./comment/Comment";
import "./feed.scss";

const Feed = ({ id, account, mockReply, src }) => {
  const [reply, setReply] = useState("");
  const [uniqueKey, setUniqueKey] = useState(1);
  const [commentList, setCommentList] = useState([]);

  function getReply(e) {
    const comment = e.target.value;
    setReply(comment);
  }

  function submitComment(e) {
    e.preventDefault();
    if (reply.length === 0) return;
    setCommentList([
      ...commentList,
      { id: uniqueKey, account: "hello", reply },
    ]);
    setUniqueKey(prev => prev + 1);
    setReply("");
  }

  return (
    <div className="storyAndFeed">
      <div className="feedContainer">
        <div className="profileWrapper">
          <img
            className="userProfileImage"
            alt="profile"
            src="/images/profile.png"
          />
          <span className="userAccount">account</span>
        </div>
        <div className="feedImageWrapper">
          <img className="feedImage" src={src} alt="feed" />
        </div>
        <div className="responseWrapper">
          <div className="feedResponse">
            {ICONS.map(icon => {
              return <i key={icon.id} className={icon.className} />;
            })}
          </div>
          <div className="likeCounter">{`좋아요 ${"00"}개`}</div>
          <div className="replyWrapper">
            <div className="userAccount">
              {account}
              <span>&nbsp;</span>
              <span className="reply">{mockReply}</span>
            </div>
            <i className="fa-regular fa-heart" />
          </div>
          {commentList.map(({ id, account, reply }) => {
            return <Comment key={id} account={account} reply={reply} />;
          })}
        </div>
        <div className="commentWrapper">
          <form className="commentForm" onSubmit={submitComment}>
            <input
              className="comment"
              placeholder="댓글 달기..."
              onChange={getReply}
              value={reply}
            />
            <button
              className={reply.length >= 1 ? "submitOn" : "submitOff"}
              onClick={submitComment}
            >
              게시
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;

const ICONS = [
  { id: 1, className: "fa-regular fa-heart" },
  { id: 2, className: "fa-regular fa-comment" },
  { id: 3, className: "fa-regular fa-paper-plane" },
  { id: 4, className: "fa-regular fa-bookmark" },
];
