import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import style from "./Comment.module.css";
import storeApi from '../../../../utilis/storeApi'
import ReusableCommentForm from "../ReusableCommentForm/ReusableCommentForm";

function Comment({ com }) {
  const [date, setDate] = useState("");
  const [showEditForm, setEditForm] = useState(false);

  const { deleteComment, updateComment } = useContext(storeApi);
  const dateTimeAgo = () => {
    var date = moment(com.date);
    setDate(moment(date).fromNow());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dateTimeAgo();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <img
          src={`${com.memberCreator.avatarUrl}/30.png`}
          className={style.avatar}
        />
        <span className={style.userName}>{com.memberCreator.username}</span>
        <span className={style.date}>{date}</span>
      </div>

      {showEditForm ? (
        <ReusableCommentForm
          com={com}
          showEditForm={showEditForm}
          setEditForm={setEditForm}
          updateComment={updateComment}
        />
      ) : (
        <div className={style.text}>
          <p>{com.data.text}</p>
        </div>
      )}
      <div className={style.buttons}>
        <span className={style.edit} onClick={() => setEditForm(true)}>
          Edit
        </span>
        <span
          className={style.delete}
          onClick={() => deleteComment(com.data.card.id, com.id)}
        >
          Delete
        </span>
      </div>
    </>
  );
}
Comment.propTypes = {
  com: PropTypes.object,
};
export default Comment;
