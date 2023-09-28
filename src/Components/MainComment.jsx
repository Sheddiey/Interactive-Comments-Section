import React, { useState } from "react";
import { useImmer } from "use-immer";
import { data } from "./data";
import { CommentsSection } from "./CommentSection";
import { AddComment } from "./AddComments";

export function Comment() {
    const [isData, updateIsData] = useImmer(data);
    const [isClickedMap, setIsClickedMap] = useState({});

    function handleReplyClick(commentId) {
        setIsClickedMap((prevState) => ({
            ...prevState,
            [commentId]: !prevState[commentId] || false,
        }));
    }

    return (
        <>
            <div className="flex-container">
                {data.map((commentData) => (
                    <CommentsSection
                        key={commentData.currentUser.username}
                        commentData={commentData}
                        isClickedMap={isClickedMap}
                        handleReplyClick={handleReplyClick}
                    />
                ))}
            </div>
            <AddComment />
        </>
    );
}