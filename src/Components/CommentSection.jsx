import React from "react";
import { CommentItem } from "./CommentItem";
import { ReplyItem } from "./ReplyItem";

export function CommentsSection({
  commentData,
  isClickedMap,
  handleReplyClick,
}) {
  return (
    <div className="comment">
      {commentData.comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isClicked={isClickedMap[comment.id]}
          handleReplyClick={() => handleReplyClick(comment.id)}
        />
      ))}
      {commentData.comments.map((replies) => (
        <div key={replies.id} className="comment-section">
          <div className="vl"></div>
          {replies.replies.map((rp) => {
            <ReplyItem
              key={rp.id}
              reply={rp}
              isClicked={isClickedMap[rp.id]}
              handleReplyClick={() => handleReplyClick[rp.id]}
            />;
          })}
        </div>
      ))}
    </div>
  );
}
