import React from "react";
import { AddComment } from "./AddComments";
import { CommentsSection } from "./CommentSection";

export function CommentItem({ comment, isClicked, handleReplyClick }) {
    return (
        <div className="comment-item flex">
        <CommentsSection />
            <div style={{display: isClicked ? 'block' : 'none'}} >
                <AddComment />
            </div>
        </div>
    );
}
