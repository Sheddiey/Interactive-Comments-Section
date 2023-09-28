import React from "react";
import { AddReply } from "./AddReply";

export function ReplyItem({ reply, isClicked, handleReplyClick }) {
    return (
        <div className="flex reply-section">
            <div style={{display: isClicked ? 'block' : 'none'}}>
                <AddReply />
            </div>
        </div>
    );
}