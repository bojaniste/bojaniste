import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import style from "./ModalCard.module.css";

function ModalCard({ handleClose, show, position, card, handleCloseModal }) {
  const [cardContent, setCardContent] = useState(card.name);
  const getName = (e) => {
    setCardContent(e.target.value);
  };
  const customStyle = {
    content: {
      left: `${position.left}px`,
      top: `${position.top}px`,
    },
  };
  return (
    <>
      <Modal
        animation={false}
        show={show}
        onHide={handleCloseModal}
        size="sm"
        contentClassName={style.modal}
        style={customStyle.content}
      >
        <div>
          <form>
            <div className="form-group">
              <label>
                <textarea
                  className={"form-control " + style.textarea}
                  type="text"
                  value={cardContent}
                  onChange={getName}
                  rows="3"
                ></textarea>
              </label>
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleClose(card.id, cardContent)}
            >
              Save
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
ModalCard.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  cardContent: PropTypes.string,
  getName: PropTypes.func,
  position: PropTypes.object,
  card: PropTypes.object,
  handleCloseModal: PropTypes.func,
};
export default ModalCard;
