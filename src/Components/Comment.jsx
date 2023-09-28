import { data } from "./data";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import reply from "./images/icon-reply.svg";
import deleteIcon from "./images/icon-delete.svg";
import editIcon from "./images/icon-edit.svg";
import juliusomoPng from "./images/avatars/image-juliusomo.webp";
import React, { useState } from "react";
import { useImmer } from "use-immer";

export function Comment() {
  const [text, setText] = useState("");
  const [isdata, updateIsData] = useImmer(data);
  const [isClickedMap, setIsClickedMap] = useState({});
  const [isTextareaVisible, setIsTextareaVisible] = useState({});

  function handleReplyClick(commentId) {
    setIsClickedMap((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId] || false,
    }));

    setIsTextareaVisible((prevState) => ({
      ...prevState,
      [commentId]: true,
    }));
  }

  function handleSendClick(commentId, { text }) {
    setText("");

    setIsTextareaVisible((prevState) => ({
      ...prevState,
      [commentId]: false,
    }));
    return (
      <div className="flex reply-section">
        <div className="score">
          <img src={plus} alt="plus-icon" />
          <p>0</p>
          <img className="minus-icon" src={minus} alt="minus-icon" />
        </div>
        <div className="content">
          <div className="flex space-between">
            <div className="flex top-contents">
              <img src={juliusomoPng} alt="juliusomo" />
              <h2>juliusomo</h2>
              <div className="you">
                <h1>you</h1>
              </div>
              <p>today</p>
            </div>
            <div className="reply">
              <>
                <img src={deleteIcon} alt="delete-icon" />
                <p>Delete</p>
                <img src={editIcon} alt="edit-icon" />
                <p>Edit</p>
              </>
            </div>
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex-container">
        {data.map((commentData) => (
          <div key={commentData.currentUser.username} className="comment">
            {commentData.comments.map((comment) => (
              <>
                <div key={comment.id} className="comment-item flex">
                  <div className="score">
                    <img src={plus} alt="plus-icon" />
                    <p>{comment.score}</p>
                    <img className="minus-icon" src={minus} alt="minus-icon" />
                  </div>
                  <div className="content">
                    <div className="flex space-between">
                      <div className="flex top-contents">
                        <img
                          src={comment.user.image.png}
                          alt={comment.user.username}
                        />
                        <h2>{comment.user.username}</h2>
                        <p>{comment.createdAt}</p>
                      </div>
                      <div
                        onClick={() => handleReplyClick(comment.id)}
                        className="reply"
                      >
                        <img
                          className="reply-icon"
                          src={reply}
                          alt="reply-icon"
                        />
                        <p>Reply</p>
                      </div>
                    </div>
                    <div className="content-text">{comment.content}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: isClickedMap[comment.id] ? "block" : "none",
                  }}
                >
                  <AddComment
                    handleSendClick={handleSendClick}
                    setText={setText}
                  />
                </div>{" "}
              </>
            ))}

            {commentData.comments.map((replies) => (
              <div key={replies.id} className="comment-section">
                <div className="vl"></div>
                {replies.replies.map((rp) => (
                  <>
                    <div key={rp.id} className="flex reply-section">
                      <div className="score">
                        <img src={plus} alt="plus-icon" />
                        <p>{rp.score}</p>
                        <img
                          className="minus-icon"
                          src={minus}
                          alt="minus-icon"
                        />
                      </div>
                      <div className="content">
                        <div className="flex space-between">
                          <div className="flex top-contents">
                            <img
                              src={rp.user.image.png}
                              alt={rp.user.username}
                            />
                            <h2>{rp.user.username}</h2>
                            <div className="you">
                              {rp.user.username === "juliusomo" && "you"}
                            </div>
                            <p>{rp.createdAt}</p>
                          </div>
                          <div className="reply">
                            {rp.user.username !== "juliusomo" ? (
                              <div
                                className="flex"
                                onClick={() => handleReplyClick(rp.id)}
                              >
                                <img src={reply} alt="reply-icon" />
                                <p>Reply</p>
                              </div>
                            ) : (
                              <>
                                <img src={deleteIcon} alt="delete-icon" />
                                <p>Delete</p>
                                <img src={editIcon} alt="edit-icon" />
                                <p>Edit</p>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="content-text content-text-reply">
                          <p>
                            <span>@{rp.replyingTo}</span> {rp.content}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: isClickedMap[rp.id] ? "block" : "none",
                      }}
                    >
                      <AddReply />
                    </div>
                  </>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <AddComment handleSendClick={handleSendClick} setText={setText} />
    </>
  );
}

function AddComment({ text, handleSendClick, setText }) {
  return data.map((user) => (
    <div className="input-field">
      <img src={user.currentUser.image.png} alt="juliusomo" />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add comment..."
      />
      <button onClick={() => handleSendClick(comment.id )} className="send-btn">
        SEND
      </button>
    </div>
  ));
}

function AddReply({ text }) {
  return data.map((user) => (
    <div className="reply-field">
      <img src={user.currentUser.image.png} alt="juliusomo" />
      <textarea value={text} placeholder="Add reply..." />
      <button className="send-btn">SEND</button>
    </div>
  ));
}

function Edit() {}
