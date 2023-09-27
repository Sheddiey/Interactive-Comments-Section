import React from "react";

export function ReplyItem({ reply, isClicked, handleReplyClick }) {
    return (
        <div className="flex reply-section">
            <div style={{display: isClicked ? 'block' : 'none'}}>
                
            </div>
        </div>
    );
}