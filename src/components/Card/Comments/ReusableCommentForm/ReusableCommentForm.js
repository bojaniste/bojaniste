import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./ReusableCommentForm.module.css";

export default function ReusableCommentForm({
  com,
  updateComment,
  setEditForm,
}) {
  const [text, setText] = useState(com.data.text);

  const getText = (value) => {
    setText(value);
  };
  const editComment = (event) => {
    event.preventDefault();
    updateComment(com.data.card.id, com.id, text);
    setEditForm(false);
    setText("");
  };
  return (
    <div className={style.form}>
      <form>
        <div className="form-group">
          <textarea
            value={text}
            placeholder="Edit a comment..."
            className={"form-control w-75 " + style.commentTextArea}
            rows="1"
            onChange={(e) => getText(e.target.value)}
          ></textarea>
          <button
            className="btn btn-success ml-2 mb-2 mt-2"
            onClick={editComment}
          >
            Save
          </button>
          <span className="ml-2" onClick={() => setEditForm(false)}>
            X
          </span>
        </div>
      </form>
    </div>
  );
}
ReusableCommentForm.propTypes = {
  com: PropTypes.object,
  updateComment: PropTypes.func,
  setEditForm: PropTypes.func,
};
