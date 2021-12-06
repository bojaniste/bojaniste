import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import style from "./ModalAddNewBoard.module.css";

function ModalAddNewBoard({
  handleClose,
  openAddModal,
  getNewBoard,
  newBoard,
  handlerAddNewBoard,
}) {
  return (
    <Modal
      animation={false}
      show={openAddModal}
      onHide={handleClose}
      contentClassName={style.modal}   
    >
      <div>
        <form>
          <div className="form-group">
            <label>
              <textarea
                className={"form-control " + style.textarea}
                type="text"
                placeholder="Add board title"
                onChange={getNewBoard}
                value={newBoard}
                rows="1"
              ></textarea>
            </label>
          </div>
          <button
            type="button"
            className="btn btn-info"
            onClick={handlerAddNewBoard}
          >
            Create Board
          </button>
        </form>
      </div>
    </Modal>
  );
}
ModalAddNewBoard.propTypes = {
  handleClose: PropTypes.func,
  openAddModal: PropTypes.bool,
  getNewBoard: PropTypes.func,
  newBoard: PropTypes.string,
  handlerAddNewBoard: PropTypes.func,
};
export default ModalAddNewBoard;
