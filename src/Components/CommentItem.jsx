import React from "react";

export function CommentItem({ comment, isClicked, handleReplyClick }) {
    return (
        <div className="comment-item flex">
            <div style={{display: isClicked ? 'block' : 'none'}} >

            </div>
        </div>
    );
}
