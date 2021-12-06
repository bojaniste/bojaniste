import React from "react";
import PropTypes from "prop-types";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./HeaderCommentModal.module.css";

export default function HeaderCommentModal({ card }) {
  return (
    <div className={style.header}>
      <FontAwesomeIcon icon={faCreditCard} />
      <span className={style.cardName}>{card?.name}</span>
    </div>
  );
}
HeaderCommentModal.propTypes = {
  comments: PropTypes.array,
  card:PropTypes.object
};
