import { data } from "./data";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import reply from "./images/icon-reply.svg";
import React from "react";

export function Comment() {
  return (
    <>
      <div className="flex-container">
        {data.map((commentData) => (
          <div key={commentData.currentUser.username} className="comment">
            {commentData.comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="score">
                  <img src={plus} alt="plus-icon" />
                  <p>{comment.score}</p>
                  <img src={minus} alt="minus-icon" />
                </div>
                <div className="content">
                  <div className="flex space-between">
                    <div>
                      <img
                        src={comment.user.image.png}
                        alt={comment.user.username}
                      />
                      <h2>{comment.user.username}</h2>
                      <p>{comment.createdAt}</p>
                    </div>
                    <div className="flex">
                      <img src={reply} alt="reply-icon" />
                      <p>Reply</p>
                    </div>
                  </div>
                  <div className="content-text">{comment.content}</div>
                </div>
              </div>
            ))}
            {commentData.comments.map((reply) => (
              <div key={reply.id}>
                {reply.replies.map(rp => (
                    <div key={rp.id}>
                    <div className="score">
                    <img src={plus} alt="plus-icon" />
                    <p>{rp.score}</p>
                    <img src={minus} alt="minus-icon" />
                  </div>
                  <div className="content">
                    <div className="flex space-between">
                      <div>
                        <img
                          src={rp.user.image.png}
                          alt={rp.user.username}
                        />
                        <h2>{rp.user.username}</h2>
                        <p>{rp.createdAt}</p>
                      </div>
                      <div className="flex">
                        <img src={reply} alt="reply-icon" />
                        <p>Reply</p>
                      </div>
                    </div>
                    <div className="content-text">{rp.content}</div>
                  </div>
                    </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>{" "}
    </>
  );
}
