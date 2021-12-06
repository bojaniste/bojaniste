import React, { useState, useContext, useRef} from "react";
import PropTypes from "prop-types";
import { faComment, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCard from "./ModalCard/ModalCard";
import storeApi from "../../utilis/storeApi";
import style from "./Card.module.css";
import Comments from "./Comments/Comments";

function Card({ card }) {
  // card modal, edit card
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: "", left: "" });
  //comment modal
  const [modalIsOpen, setIsOpen] = useState(false);
  const { updateCards, deleteCard, addComment,comments,getComment} = useContext(storeApi);

  const el = useRef();
  const handleShow = () => {
    getPositionForModal(), setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };
  const handleClose = (id, text) => {
    updateCards(id, text);
    setShow(false);
  };

  const getPositionForModal = () => {
    let topPos = el.current.getBoundingClientRect().top + 20;
    let leftPos = el.current.getBoundingClientRect().left - 810;
    setPosition({
      top: topPos,
      left: leftPos,
    });
  };

  function openModal() {
    getComment(card.id)
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleComments = (comment) => {
    addComment(card.id, comment);
    getComment(card.id)
  };
  return (
    <>
      <div
        ref={el}
        className={`card ${style.trelloCard} `}
        style={{ width: "300px", minHeight: "25px" }}
       
      >
        <div className="card-body p-1 pl-2">
          <div className="card-text d-flex justify-content-between">
            <p  onClick={(e) => { e.stopPropagation(), openModal()}}>{card.name} </p>
            <div>
              <span className={"mr-2 ml-3" + style.trash}>
                <FontAwesomeIcon
                  color="#6b778c"
                  onClick={(e) => {e.stopPropagation(),deleteCard(card.id)}}
                  icon={faTrash}
                />
              </span>
              <span className={style.pen} onClick={handleShow}>
                <FontAwesomeIcon icon={faPen} color="#6b778c" />
              </span>
            </div>
           
          </div>
          <ModalCard
            position={position}
            show={show}
            handleCloseModal={handleCloseModal}
            handleClose={handleClose}
            handleShow={handleShow}
            card={card}
          />
          <Comments
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            card={card}
            handleComments={handleComments}
            comments={comments}
          />
          
          {card?.badges?.comments>0? <div className={style.commentInfo}>
            <FontAwesomeIcon icon={faComment}/>
            <span className="pl-2">{card?.badges?.comments}</span> 
            </div>:""}
        </div>
      </div>
    </>
  );
}
Card.propTypes = {
  card: PropTypes.object,
  comments:PropTypes.array
};
export default Card;
