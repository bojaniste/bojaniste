import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment/Comment";
import { Modal } from "react-bootstrap";
import style from "./Comments.module.css";
import FormComment from "./Comment/FormComment/FormComment";
import HeaderCommentModal from "./HeaderCommentModal/HeaderCommentModal";


function Comments({ modalIsOpen, closeModal, handleComments, comments,card}) {
  return (
    <div>
      <Modal
        animation={false}
        show={modalIsOpen}
        onHide={closeModal}
        contentClassName={style.modal}
      >
        <div
          className={style.exit}
          onClick={(e) => {
            e.stopPropagation(), closeModal();
          }}
        >
          <span> X</span>
        </div>
        <HeaderCommentModal card={card}/>
        <FormComment handleComments={handleComments} comments={comments} />
        {/* comments */}
        <div className={style.comments}>
          {comments.map((com) => {
            return <Comment key={com.id} com={com} />;
          })}
        </div>
      </Modal>
    </div>
  );
}
Comments.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal:PropTypes.func,
  handleComments:PropTypes.func,
  comments:PropTypes.array,
  card:PropTypes.object
};
export default Comments;
