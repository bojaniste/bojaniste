import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./FormComment.module.css";

export default function FormComment({ handleComments }) {
  const [comment, setComment] = useState("");
  const [showTextArea, setTextArea] = useState(false);

  const getComment = (event) => {
    setComment(event.target.value);
  };

  const handleComment = (event) => {
    event.preventDefault();
    handleComments(comment);
    setComment("");
    setTextArea(false);
  };
  return (
    <div className={style.formHolder}>
      {showTextArea ? (
        <div className={style.form}>
          <form>
            <div className="form-group">
              <textarea
                placeholder="Write a comment..."
                className={"form-control w-75 " + style.commentTextArea}
                rows="1"
                value={comment}
                onChange={getComment}
              ></textarea>
              <button
                onClick={handleComment}
                disabled={!comment}
                className={
                  comment
                    ? "btn btn-success ml-2 mb-3"
                    : "btn btn-light ml-2 mb-3"
                }
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className={style.hideForm}>
          <form >
            <div className="form-group">
              <textarea
              value={comment}
              onChange={handleComment}
                onClick={() => setTextArea(true)}
                placeholder="Write a comment..."
                className={"form-control w-75 " + style.commentTextArea}
                rows="1"
              ></textarea>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
FormComment.propTypes = {
handleComments:PropTypes.func
};