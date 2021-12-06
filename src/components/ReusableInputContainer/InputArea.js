import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./ReusableInputContainer.module.css";
import storeApi from "../../utilis/storeApi";

function InputArea({ open, setOpen, type, listId }) {
  const { addList, addCards } = useContext(storeApi);
  // input value
  const [value, getValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    getValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "card" && value.length > 0) {
      addCards(value, listId);
      getValue("");
      setOpen(false);
    } else {
      addList(value);
      getValue("");
      setOpen(false);
    }
    return false;
  };

  return (
    <>
      {open ? (
        <div className={style.card}>
          <form onSubmit={handleSubmit} className="pl-2 pr-2">
            <div className="form-group w-100 align-self-center">
              <textarea
                className="form-control w-100"
                rows="3"
                value={value}
                onChange={handleChange}
              ></textarea>
              <div className="mt-3">
                <button type="submit" className="btn btn-success mr-3">
                  {type === "card" ? "Add Card" : "Add list"}
                </button>
                <FontAwesomeIcon
                  icon={faTimes}
                  className={style.timesIcon}
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
InputArea.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  type: PropTypes.string,
  listId: PropTypes.string,
};
export default InputArea;
